// netlify/functions/chat.ts
// Netlify Function — proxies chat messages to the Claude API.
// The API key lives only here, server-side. It is never sent to the browser.

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
    const messages = [...(history ?? []), { role: "user", content: message }];

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": process.env.ANTHROPIC_API_KEY as string,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5",
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", errText);
      return { statusCode: 502, body: JSON.stringify({ error: "Upstream API error" }) };
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text ?? "Sorry, I couldn't generate a reply.";

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply }),
    };
  } catch (err) {
    console.error("Chat handler error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Something went wrong. Please try again." }) };
  }
};
