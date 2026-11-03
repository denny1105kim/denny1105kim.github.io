---
title: 'Build Error Diagnosis with Local LLM & Hybrid RAG'
subtitle: 'Master’s Thesis Research'
description: 'Measured and selected local LLM + RAG configurations that diagnose embedded C/C++ build errors in air-gapped networks where external APIs are not allowed.'
period: 'Mar 2024 — Oct 2026'
kind: 'M.S. research · Ajou University'
order: 1
cover: '/projects/thesis-build-error-rag/pipeline.svg'
coverAlt: 'Knowledge base construction and air-gapped diagnosis pipeline'
tags: ['Local LLM', 'RAG', 'FAISS', 'BM25', 'Graph RAG', 'llama.cpp', 'Evaluation']
metrics:
  - { value: '1.59M → 7,150', label: 'Public records → curated cases' }
  - { value: '13', label: 'Local LLMs (3B–8B) compared' }
  - { value: '11,700', label: 'Answers graded' }
  - { value: '22% → 33%', label: 'No-RAG → Hybrid SR (unseen cases)' }
---

## Background

Embedded build errors are hard to diagnose from source code alone — the fix often depends on the toolchain, build configuration, and target hardware together. Organizations that forbid sending source code and logs outside need to run models **on-premises in a closed network**, which brings two constraints:

- Internal machines have **limited compute**.
- Small local LLMs on their own lack **toolchain- and version-specific fix knowledge**.

## Approach

![Knowledge base construction and air-gapped diagnosis pipeline](/projects/thesis-build-error-rag/pipeline.svg)


1. **Knowledge base** — Collected ~1.59M public records from GitHub issues, Stack Overflow, GCC Bugzilla and more, then used rule-based filtering and LLM-based structured extraction to build **7,150** resolution cases, each with *error message · context · root cause · fix · environment metadata*.
2. **Retrieval setups** — Compared Dense, Hybrid (Dense + BM25 with RRF), Graph, Vector+Graph, and a no-retrieval baseline.
3. **Models & devices** — Ran 13 local LLMs (3B–8B) through a llama.cpp-based runtime on a CPU-only laptop and a GPU workstation.
4. **Evaluation** — Used 50 shared questions, each tested with its source case *included in* or *excluded from* the KB. Claude Sonnet scored whether the proposed fix matched the reference (0–2), producing success rate (SR), strict accuracy (SA), and response time.

## Results

- With the source case in the KB, Dense / Hybrid retrieval reached **~90% average SR** — very effective at reusing documented fixes.
- Without it, SR rose from **22% (no RAG) to 31–33% (Hybrid)** — a real but much smaller gain.
- Hybrid had the highest average SR on unseen cases on both devices.
- Retrieval latency was **<0.1% (laptop) and <3% (workstation)** of total response time — latency is driven mostly by the model and the device.

| Device | Final setup | Why |
|---|---|---|
| Laptop (CPU) | **Qwen3 8B + Hybrid** | 8 pp lower SR, but less than half the response time |
| Workstation (GPU) | **Ministral 3 8B + Hybrid** | Highest SR in both conditions |

![Success rate (%) per model and retrieval setup when the source case is excluded from the KB](/projects/thesis-build-error-rag/sr-heatmap.jpg)
*Success rate (%) per model and retrieval setup when the source case is excluded — top: CPU laptop, bottom: GPU workstation.*

Both setups run fully offline once the model weights and knowledge base are brought inside the network.

> **Thesis** — *Local LLM and RAG Configuration for Embedded Build Error Diagnosis in Resource-Constrained On-Premises Closed Networks*, M.S. thesis, Dept. of Artificial Intelligence, Ajou University, 2026.
