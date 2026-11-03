---
title: 'AISTOCK'
subtitle: 'Data · ML · LLM Automated Trading Ops'
description: 'An automated trading and operations system that chains market data collection and validation, ML screening, permission-restricted LLM review, order reconciliation, and ops checks.'
period: 'Jun 2026 — Present'
kind: 'Personal project · Design / build / operate'
order: 4
tags: ['Kubernetes', 'TimescaleDB', 'ML', 'LLM', 'Claude Code', 'Codex']
metrics:
  - { value: '4 nodes', label: 'Role-separated Kubernetes' }
  - { value: 'PIT', label: 'Point-in-time data quality gates' }
---

## Overview

```
Collect (APIs / news) → Validate (PIT / quality) → Decide (ML / LLM) → Operate (checks / recovery)
```

Operational safety and **preventing data leakage** are the top priorities. Every detected incident is turned into a prevention rule and an automated check.

## What I did

- Split Kubernetes workloads by role — control (deploys, LLM bridge) / DB (primary, standby) / GPU (allow-listed) / workers (collection, validation, orders, risk)
- Collected and validated **point-in-time** data on TimescaleDB and improved queries
- ML walk-forward validation; reconciliation of live orders and balances
- LLM-assisted review with tightly restricted permissions and risky actions gated
- **Harness**: scheduled checks, anomaly detection, automatic incident ledger
- **HERMES**: incident root-cause classification, recovery execution, and result verification
- Task management with Claude Code, Codex and Beads

## Before → After

| Before | After |
|---|---|
| Collection, decisions and trading were scattered, so failures were hard to trace | Role-based node placement and a single order path |
| Risk of missed data, look-ahead leakage and duplicate runs | PIT quality gates and a standard check → classify → recover → verify flow |
| Risk from unchecked LLM decisions | Restricted LLM review permissions and gated risky actions |
