---
title: 'DecodeX'
subtitle: 'AI Agent for Investment News Analysis'
description: 'An AI-agent news service that pre-analyzes investment news, recommends articles matched to each user’s profile, and answers follow-up questions with RAG over pgvector.'
period: 'Oct 2025 — Jan 2026'
kind: 'Team project · 5 people · AI Master Course'
order: 5
tags: ['Django', 'React', 'PostgreSQL', 'pgvector', 'Kubernetes', 'LLM', 'RAG', 'GA4']
repo: 'https://github.com/denny1105kim/portfolio-AI-Agent-for-Investment-News-Analysis'
metrics:
  - { value: 'Pre-analysis', label: 'News analyzed before users ask' }
  - { value: 'Cosine sim.', label: 'Profile-vector recommendations' }
  - { value: 'K8s CronJobs', label: 'Scheduled crawling & AI batch jobs' }
---

![DecodeX home page](/projects/decodex/home.jpg)

## Why

- There is plenty of news, but it's hard for investors to **pick out what matters right now**.
- Summaries are everywhere, but **interpretation from an investor's point of view** is rare.
- Everyone gets the same news, even though **interests and risk profiles differ**.

DecodeX tackles this with three building blocks: **AI pre-analysis + personalized recommendation + agent-based Q&A**.

## How it works

```
Crawl news & market data → Clean / dedupe → AI pre-analysis
  → PostgreSQL + pgvector → Fast responses
```

1. **Collect** — Scheduled crawling of news sources and stock market data (KOSPI / KOSDAQ / NASDAQ) as Kubernetes CronJobs, with cleaning and de-duplication.
2. **Pre-analyze** — LLM summaries, sector / theme classification, investment-impact and risk analysis, and embedding generation.
3. **Store** — Structured data in PostgreSQL, context embeddings in pgvector, and cached analysis results.
4. **Serve** — Requests are answered from pre-analyzed data instead of running analysis in real time, keeping responses fast.

## Features

- **AI news analysis cards** — a 3-line key summary, context for indicators such as PER, interest rates and earnings momentum, positive vs. caution factors split visually, short- and long-term perspectives, and automatic explanations of financial terms for beginners. (Clearly marked as decision support, not investment advice.)
- **Personalized recommendations** — onboarding collects risk profile, investment level, asset types, themes of interest and holdings. The profile becomes a **user vector**, news summaries become **news embeddings**, and articles are ranked by cosine similarity.
- **Agent chatbot** — follow-up questions about a story, answered with retrieved related news (RAG).
- **Data-driven UX iteration** — GA4 behavior data and user surveys showed strong interest in AI analysis but friction in the flow from reading to asking a question, which drove UX improvements.

## Architecture

| Layer | Stack |
|---|---|
| Frontend | React (Vite), TailwindCSS — responsive for mobile and desktop |
| Backend | Django REST API |
| Data | PostgreSQL + pgvector for news / user data and vector search |
| Infra | Kubernetes (master + workers), Docker, Nginx; rolling updates, self-healing, CronJobs |
| LLM | Hosted LLM APIs; an optional local LLM was disabled for performance reasons |

## My role

- Built the investment-news crawling and ETL pipeline
- LLM-based summarization, classification and sentiment / impact analysis
- Embedding generation and pgvector similarity search for recommendations and Q&A
- Django APIs and data models wired to the React UI
