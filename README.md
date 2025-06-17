# 🌿 GenAI AppHub – AI-Powered Research & Automation for Sustainability

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id-here/deploy-status)](https://genai-platform-basic.netlify.app/)  
🔗 **Live Demo:** [https://genai-platform-basic.netlify.app/](https://genai-platform-basic.netlify.app/)

---

## 🧠 Overview

**GenAI AppHub** is a modular Generative AI platform enabling intelligent document interaction, research automation, and agent-based tasks. Designed as a **GreenSkill project**, it facilitates AI-assisted sustainability research, promotes digital document usage, and aligns with **UN SDGs** like:

- ✅ SDG 12: Responsible Consumption & Production  
- ✅ SDG 13: Climate Action  
- ✅ SDG 4: Quality Education  

The platform supports querying multiple PDFs, summarizing insights, automating research tasks, and driving climate awareness using AI.

---

## 🚀 Key Features

| Feature                             | Description                                                                 |
|-------------------------------------|-----------------------------------------------------------------------------|
| 📄 Multi-PDF Chat                   | Upload 1 or more PDFs and chat with them using AI                          |
| 🧠 RAG-Based QA                     | Retrieval-Augmented Generation (RAG) for accurate and context-aware answers|
| 🌐 GraphRAG Agent                   | Understand interlinked document insights using Graph-based QA              |
| 👨‍💻 Agentic Research Assistant      | Let agents perform research, summarization, and more automatically         |
| 📑 Resume Review Bot               | AI-powered resume feedback and improvement suggestions                     |
| 🧮 Text-to-SQL Executor             | Query your data using natural language and convert to SQL instantly        |
| ♻️ Sustainability Focus            | Optimized for use with environmental data, climate research, SDG docs      |
| 🔒 Privacy Respecting              | No data is stored; all processing is in-session                            |

---

## 🏗️ Architecture

**Frontend**:
- `Remix`, `TailwindCSS`, `TypeScript`

**Backend**:
- `Go` APIs
- `LangChain`, `LangGraph` for agents and RAG
- `Neo4j` for knowledge graph storage
- `FAISS` for vector similarity search

**AI Models/APIs**:
- OpenAI GPT-4 / GPT-3.5
- Gemini Pro (optional)
- OpenRouter support for BYOM (Bring Your Own Model)

**Database**:
- PostgreSQL (for logging, sessions, etc.)

**Deployment**:
- Hosted on Netlify for frontend
- Backend deployable via Render, Railway, or custom VMs

---

## ♻️ GreenSkill Alignment

| Criteria                       | Contribution                                                                 |
|-------------------------------|------------------------------------------------------------------------------|
| 🌱 Environmental Impact       | Reduces paper-based research by digitizing document interaction              |
| 📘 Sustainability Education   | Helps users query SDG documents, climate reports, and green policy papers    |
| 🧠 AI for Climate Literacy    | Enables students, NGOs, and citizens to access actionable environmental insights |
| ⚡ Energy Efficiency           | Backend in Go (energy-efficient runtime), serverless hosting on demand        |

---

## 📂 Folder Structure (Frontend)

📦genai-apphub/
┣ 📁app/
┃ ┣ 📁routes/ → Remix route files
┃ ┣ 📁components/ → Reusable UI components
┃ ┣ 📁utils/ → Helper functions & model integration
┃ ┣ 📁styles/ → Tailwind styles
┃ ┗ 📄entry.server.tsx → Entry point for SSR
┣ 📄remix.config.js
┣ 📄tailwind.config.ts
┗ 📄package.json

yaml
Copy
Edit

---

## 🛠️ Getting Started (Local Setup)

### 🔧 Prerequisites

- Node.js ≥ 18.x  
- Go ≥ 1.20  
- PostgreSQL (optional)
- Neo4j Desktop or AuraDB (for GraphRAG)
- OpenAI / Gemini API Key

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/genai-apphub.git
cd genai-apphub
