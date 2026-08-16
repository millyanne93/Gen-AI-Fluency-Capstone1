# FL Capstone — Millyanne Wanjala

**Track:** General AI Fluency
**Project:** Impact Project / Capstone
**Internship:** FlyRank AI — Backend Engineering Track
**Date:** August 2026

---

# Overview

This capstone brings together three areas of my learning during the internship:

1. **AI Fluency** — Using AI tools for research, development, evaluation, and problem solving.
2. **Personal Brand** — Building and deploying a professional portfolio that demonstrates my technical experience.
3. **Personal Agent** — Integrating an AI assistant into my portfolio to answer questions about my background, projects, and skills.

---

# Part 1: AI Stack

## AI Tools I Use

| Tool           | Purpose                               | How I Use It                                                                                                    |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Claude**     | AI development assistant              | Code generation, debugging, technical research, prompt experimentation, and reviewing implementation approaches |
| **ChatGPT**    | Cross-model comparison                | Comparing AI responses, researching technical problems, debugging, and testing alternative approaches           |
| **NotebookLM** | Research and document analysis        | Summarizing PDFs, extracting key information, and organizing research notes                                     |
| **Netlify**    | Hosting and serverless infrastructure | Deploying my portfolio and hosting the serverless function used by my personal agent                            |
| **Supabase**   | Backend authentication                | Implementing authentication, JWT verification, and protected API routes                                         |

---

## AI Workflows I Built

### 1. Research Paper Summarizer

**Tools:** Claude + NotebookLM

**Workflow:**

```text
Source Material
      ↓
Extract Key Information
      ↓
Summarize
      ↓
Synthesize Findings
      ↓
Review and Verify
      ↓
Structured Notes
```

**Steps:**

1. Provide the research material to NotebookLM.
2. Extract the major arguments, findings, and relevant information.
3. Use Claude to synthesize the extracted information.
4. Review the generated summary against the original material.
5. Produce a concise structured summary.

**Result:**

I was able to produce approximately 300-word summaries together with structured notes that made longer research material easier to understand and review.

**What I learned:**

AI is most useful for research when I treat its output as a starting point that still requires verification rather than accepting generated information without checking the source.
<img width="1366" height="728" alt="2026-08-12 (7)" src="https://github.com/user-attachments/assets/9637a107-a483-4c12-b1b4-664aa8ef3250" />

---

### 2. Prompt Ladder

**Tools:** Claude + ChatGPT

I used iterative prompting to improve the quality and reliability of AI-generated backend development responses.

**Workflow:**

```text
Baseline Prompt
      ↓
Identify Weaknesses
      ↓
Add Context
      ↓
Add Constraints
      ↓
Add Expected Output
      ↓
Test Multiple Versions
      ↓
Evaluate Results
      ↓
Reusable Prompt
```

**Steps:**

1. Start with a basic development request.
2. Evaluate the quality of the response.
3. Identify missing context and ambiguity.
4. Add technical requirements and constraints.
5. Specify the expected output format.
6. Compare responses across Claude and ChatGPT.
7. Keep the prompt structure that produced the most useful result.

**Result:**

I developed reusable prompting patterns for backend development tasks, particularly around API design, debugging, database integration, and deployment.

**What I learned:**

Better prompts are not simply longer prompts. They provide the AI with the right context, constraints, expected behavior, and evaluation criteria.

---

### 3. Case Study Framework

**Tool:** Claude

I used AI to help structure my technical projects into concise case studies.

**Framework:**

```text
Problem
   ↓
What I Did
   ↓
Result
   ↓
Learnings
```

**Projects:**

* PlanIt
* EduAdapt
* Trackr

**Result:**

Instead of presenting my projects as simple technology lists, I was able to communicate the problem being solved, my contribution, the outcome, and what I learned from each project.

**What I learned:**

AI can help transform technical project information into clearer professional communication when I provide the underlying facts and verify the final output.

---

## AI Fluency Principles I Applied

Throughout these workflows, I focused on using AI as a **thinking and development partner rather than blindly accepting generated output**.

The main principles I applied were:

* Provide clear context and constraints.
* Break complex tasks into smaller steps.
* Compare different AI-generated approaches.
* Verify technical information.
* Review generated code before using it.
* Test implementations rather than assuming they work.
* Avoid providing sensitive information such as API keys.
* Use AI to improve my reasoning and communication, not replace it.

---

# Part 2: Personal Brand — Portfolio

## Live Portfolio

**Portfolio:** https://millyanne93-portfolio.netlify.app/
<img width="1366" height="728" alt="2026-08-12 (2)" src="https://github.com/user-attachments/assets/cd56f77b-9a7d-4868-b518-86a42a1271a1" />


The portfolio presents my background, technical skills, projects, and case studies in a professional format.

---

## Identity Kit

| Element           | Choice                               |
| ----------------- | ------------------------------------ |
| **Heading Font**  | Space Grotesk                        |
| **Body Font**     | Inter                                |
| **Primary Color** | `#6B21A5` (purple)                  |
| **Text Color**    | `#111827` (near-black)              |
| **Background**    | `#F9FAFB` (off-white)               |
| **Accent**        | `#8B5CF6` (lighter purple)          |
| **Logo**          | "MW" monogram                        |
| **Mood**          | Modern, clean, minimal, professional, with a purple accent |

The visual identity was designed to communicate a combination of technical competence, clarity, and professionalism.

---

# Case Studies

## 1. PlanIt — Cloud-Native Task Management

### Problem

PlanIt was a self-directed project created to gain practical experience with containerization, infrastructure as code, Kubernetes, and AWS.

### What I Did

* Containerized the frontend and backend using Docker.
* Deployed the application to AWS EKS.
* Used Terraform to provision infrastructure.
* Used Helm to deploy application components to Kubernetes.
* Configured Kubernetes services and application secrets.
* Troubleshot deployment, networking, database, and infrastructure issues.

### Result

Successfully deployed and verified the application stack on AWS EKS.

The infrastructure was later taken down to avoid unnecessary cloud costs.

### Learnings

* Infrastructure should be designed with cost management in mind.
* Database credentials should be managed using secure secret-management solutions.
* Persistent storage requires careful planning when working with Kubernetes.
* Infrastructure as code makes complex environments easier to reproduce and manage.

---

## 2. EduAdapt — AI-Powered Adaptive Learning

### Problem

EduAdapt was my graduation project exploring whether AI could generate questions targeted at individual students' learning weaknesses.

### What I Did

* Built a backend API.
* Integrated Google's Gemini AI for question generation.
* Implemented role-based authentication.
* Designed the application around personalized learning.
* Tested the system with a small pilot group.

### Result

The system generated questions within approximately 2–5 seconds during testing.

The authentication and role-based access functionality worked as expected.

### Learnings

* AI integrations should be isolated from the rest of the application where possible.
* API rate limits and usage costs should be considered early.
* AI-generated content should be evaluated rather than blindly trusted.
* Clear prompts significantly affect the quality and consistency of generated content.

---

## 3. Trackr — Equipment Tracking System

### Problem

Small organizations may need a simple and affordable way to track equipment, assignments, and borrowing history.

### What I Did

* Built a full-stack equipment tracking application.
* Implemented authentication.
* Added role-based access control.
* Implemented equipment assignment.
* Added borrowing and equipment history.
* Built the frontend and backend.
* Deployed the application.

### Result

The application was successfully deployed and is available online.

**Live Application:** https://trackr-kd45.vercel.app/

### Learnings

* Frontend architecture should be considered before implementation.
* Authentication and authorization need to be designed together.
* Edge cases should be handled explicitly.
* A simple user workflow is important for applications used for operational tasks.

---

# Part 3: Personal Agent

## Portfolio Chat Agent

I built an AI-powered chat widget for my portfolio that allows visitors to ask questions about my background, technical skills, projects, and experience.

The agent uses the **Gemini API** through a Netlify serverless function. Gemini 2.5 Flash is used because it is available on the free tier, with a limit of 15 requests per minute and 1,500 requests per day.

<img width="1000" height="900" alt="widget_dark_FINAL" src="https://github.com/user-attachments/assets/dbc56844-24f5-4052-b74c-4db2852115ad" />


---

## User Experience

The visitor workflow is:

```text
Visitor opens portfolio
        ↓
Clicks "Ask about Millyanne"
        ↓
Chat widget opens
        ↓
Visitor asks a question
        ↓
Question sent to Netlify Function
        ↓
Netlify Function calls Claude API
        ↓
Claude generates response
        ↓
Response returned to browser
        ↓
Visitor sees answer
```

---

## Architecture

```text
┌─────────────────────────────┐
│     Portfolio Website       │
│                             │
│       HTML / CSS / JS       │
│                             │
│       Chat Widget           │
└──────────────┬──────────────┘
               │
               │ HTTPS request
               ▼
┌─────────────────────────────┐
│      Netlify Function       │
│                             │
│  - Receives user question   │
│  - Builds system prompt     │
│  - Calls Claude API         │
│  - Returns AI response      │
└──────────────┬──────────────┘
               │
               │ HTTPS
               ▼
┌──────────────────────────────────────────────┐
│            Google Gemini API                 │
│                                              │
│            Gemini 2.5 Flash                  │
│    (Free tier: 15 req/min, 1,500/day)        │
└──────────────────────────────────────────────┘
```

---

## Technical Implementation

| Component                | Technology                          |
| ------------------------ | ----------------------------------- |
| **Frontend**             | HTML + CSS + JavaScript             |
| **Chat UI**              | JavaScript embedded in `index.html` |
| **Backend**              | Netlify Serverless Function         |
| **AI Model**             |  Gemini 2.5 Flash                   |
| **AI Provider**          |  Google Gemini API                  |
| **Hosting**              | Netlify                             |
| **Environment Variable** | `GEMINI_API_KEY`                    |
| **API Key Storage**      | Netlify environment variables       |

The Gemini API key is stored as a server-side environment variable rather than being exposed in the browser.

---

# System Prompt Design

The personal agent is intentionally restricted to information about me and my professional background.

The system prompt is designed to:

* Answer questions about my background.
* Explain my technical skills.
* Describe my projects.
* Explain my education and professional experience.
* Avoid inventing projects, skills, qualifications, or experience.
* Decline unrelated questions politely.
* Stay within the factual information provided to it.

This helps reduce hallucinations and keeps the agent focused on its purpose.
<img width="1366" height="728" alt="2026-08-12 (5)" src="https://github.com/user-attachments/assets/8cc86a49-90b3-4311-8af2-37ce73609d41" />

---

# Agent Limitations

The current implementation has several known limitations:

### 1. API Credits
The agent uses Gemini's free tier, which has limits of 15 requests per minute and 1,500 requests per day. This is sufficient for a low-traffic portfolio site.

### 2. No Conversation Persistence

Conversation history exists only within the current browser session. Refreshing the page clears the conversation.

### 3. No Rate Limiting

The current implementation does not yet have rate limiting because the portfolio is intended for low traffic.

### 4. Limited Knowledge Scope

The agent is intentionally restricted to information about me rather than functioning as a general-purpose AI assistant.

---

# Security Considerations

The personal agent uses a serverless backend instead of calling the GEMINI API directly from the browser.

The API key is stored using a Netlify environment variable:

```text
GEMINI_API_KEY
```

The key is therefore not included in the public frontend source code.

No API keys or other secrets are included in this repository or portfolio.

---

# Evidence of Implementation

## Portfolio

**Live URL:**

https://millyanne93-portfolio.netlify.app/

## Personal Agent

**Location:** Integrated into the portfolio website.

**Backend:** Netlify Serverless Function.

**AI Provider:** Gemini free tier (15 req/min, 1,500/day).

---

# Capstone Summary

| Component                  | Status                  | Evidence                                                |
| -------------------------- | ----------------------- | ------------------------------------------------------- |
| **AI Stack**               | ✅ Completed             | AI tools and workflows documented above                 |
| **AI Workflows**           | ✅ Completed             | Research summarizer, prompt ladder, case-study workflow |
| **Personal Brand**         | ✅ Completed             | Live portfolio                                          |
| **Portfolio Case Studies** | ✅ Completed             | PlanIt, EduAdapt, Trackr                                |
| **Personal Agent**         | ✅ Built & Deployed      | Portfolio chat widget                                   |
| **Serverless Backend**     | ✅ Completed             | Netlify Function                                        |
| **AI Integration**         | ✅ Implemented           | Gemini free tier                                        |
| **Secrets Management**     | ✅ Completed             | Netlify environment variable                            |
| **Live Agent Responses**   | ✅ Working               | Google API account                                      |

---

# What I Learned

This capstone brought together the main skills I developed during the internship.

### 1. AI Fluency

I learned to use AI as a thinking and development partner for research, coding, debugging, communication, and problem solving rather than simply using it to generate answers.

### 2. Prompt Engineering

I learned that good prompts provide context, constraints, expected behavior, and evaluation criteria. Iterative prompting produced more reliable results than relying on a single generic request.

### 3. AI Evaluation

I learned to compare AI outputs, identify potential hallucinations, verify technical information, and test generated code before relying on it.

### 4. Portfolio Development

I learned how to turn my technical experience into a professional personal brand using case studies focused on problems, actions, results, and lessons learned.

### 5. AI Application Development

I learned how to integrate an LLM into a real web application using a frontend, serverless backend, API integration, and environment-based secret management.

### 6. Responsible AI

I learned the importance of constraining an AI agent's scope and explicitly instructing it not to invent information.

### 7. Full-Stack AI

The personal agent helped me understand the complete flow from:

```text
User Interface
      ↓
Backend Function
      ↓
AI API
      ↓
Generated Response
      ↓
User Interface
```

---

# Final Reflection

The biggest lesson from this capstone was that AI fluency is not simply knowing how to use an AI chatbot.

It is the ability to identify where AI adds value, provide it with the right context, evaluate its output, integrate it into real workflows, and understand its limitations.

Through this project, I moved from using AI primarily as a coding assistant toward using it as part of a broader engineering workflow involving research, prompting, evaluation, software development, deployment, and communication.

---

**Built with:** Claude, ChatGPT, NotebookLM, Netlify, HTML, CSS, JavaScript, TypeScript, Gemini

**Internship:** FlyRank AI — Backend Engineering Track

**Date:** August 2026

