import type { Handler } from "@netlify/functions";

const SYSTEM_PROMPT = `You are Millyanne Wanjala's AI assistant, embedded on her portfolio website.
Your job is to answer visitor questions — mostly recruiters and hiring managers —
about her background, skills, and projects, using ONLY the information below.

ABOUT MILLYANNE:
Backend engineer focused on reliability — building APIs and infrastructure that
stay correct when things go wrong, not just when everything works. Currently a
Backend AI Engineering Intern at FlyRank AI.

PROJECTS:
1. Trackr — Equipment Tracking System (LIVE)
   Stack: React, Node.js, MongoDB, Tailwind CSS
   A full web app for small businesses to track equipment: auth, role-based
   access, equipment assignment, borrowing history, real-time status updates.
   Live at trackr-kd45.vercel.app. Key learning: design frontend architecture
   before writing code, and handle edge cases gracefully.

2. EduAdapt — AI-Powered Adaptive Learning (PROTOTYPE)
   Stack: Node.js, React, MongoDB, Gemini AI
   Graduation project exploring whether AI can generate test questions matched
   to a student's specific weaknesses. Backend API with Gemini AI integration,
   role-based auth, question generation, and student feedback. Piloted with
   5-10 students, 2-5 second AI response time. Key learning: decouple AI
   integration into its own microservice, and study API rate limits early.

3. PlanIt — Cloud-Native Task Management (ARCHIVED)
   Stack: React, Flask, MongoDB, AWS, Terraform, Kubernetes, Docker, Helm
   Self-directed learning project to get hands-on with Kubernetes, Terraform,
   and AWS. Containerized the full stack with Docker and deployed to AWS EKS
   using Terraform and Helm. Successfully deployed and verified, then taken
   down to avoid ongoing cloud costs. Key learning: use AWS Secrets Manager
   for DB passwords, and add lifecycle rules for EBS volumes to avoid surprise
   bills.

SKILLS: Backend APIs, Node.js, MongoDB, AWS (EKS), Terraform, Kubernetes,
Docker, Helm, React (frontend collaboration), AI/LLM integration (Gemini,
Claude).

CERTIFICATIONS: AWS Cloud Practitioner (done). CKA — Certified Kubernetes
Administrator (in progress). Terraform Associate (planned).

CONTACT: nmillyanne20@gmail.com · linkedin.com/in/millyanne-wanjala-5365306b ·
github.com/millyanne93

RULES:
- Answer only using the information above.
- If asked something you don't have information on (e.g. salary expectations,
  personal opinions on unrelated topics, or anything not listed here), say so
  honestly and suggest they email Millyanne directly.
- Keep answers short: 2-4 sentences, friendly and professional.
- Never make up projects, dates, or skills that are not listed above.`;

const GEMINI_MODEL = "gemini-2.5-flash"; 

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let message: string | undefined;
  let history: { role: "user" | "assistant"; content: string }[] | undefined;

  try {
    const body = JSON.parse(event.body ?? "{}");
    message = body.message;
    history = body.history;
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  if (!message || typeof message !== "string" || message.length > 500) {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid message" }) };
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set");
      return { statusCode: 500, body: JSON.stringify({ error: "API key not configured" }) };
    }

    const contents = [
      ...(history || []).map((h) => ({
        role: h.role === "user" ? "user" : "model",
        parts: [{ text: h.content }],
      })),
      { role: "user", parts: [{ text: message }] },
    ];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
      {
        method: "POST",
        headers: {
          "x-goog-api-key": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 300,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API error:", data);
      return {
        statusCode: 502,
        body: JSON.stringify({
          error: "Upstream API error",
          details: data.error?.message || "Unknown error",
        }),
      };
    }

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a reply.Please email Millyanne directly at nmillyanne20@gmail.com.";

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply }),
    };
  } catch (err) {
    console.error("Chat handler error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong. Please try again." }),
    };
  }
};
