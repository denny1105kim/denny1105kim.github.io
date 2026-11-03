---
title: 'Heterogeneous GPU Training & LLM Platform'
subtitle: 'Kubernetes · KubeRay Platform'
description: 'Single-handedly built and operate a shared training and domain-LLM environment that ties 3 DGX and 4 Jetson nodes together with Kubernetes and KubeRay.'
period: 'Aug 2025 — Present'
kind: 'Internal project · Solo'
order: 2
cover: '/projects/gpu-ray-platform/architecture.svg'
coverAlt: 'DGX and Jetson nodes connected with Kubernetes and KubeRay'
tags: ['Kubernetes', 'k3s', 'KubeRay', 'Ray Train', 'MLflow', 'Prometheus', 'Grafana', 'LoRA']
metrics:
  - { value: 'DGX ×3', label: 'Parallel LLM serving · LoRA' }
  - { value: 'Jetson ×4', label: 'Edge training · inference' }
  - { value: '1 module', label: 'Shared job launch convention' }
---

## Overview

![Platform architecture](/projects/gpu-ray-platform/architecture.svg)


Connected the company's x86, DGX GB10 and Jetson GPUs into one cluster so that anyone can submit and track training jobs the same way. The platform is continuously updated and maintained.

## What I did

- Set up Kubernetes (k3s), KubeRay, and Ray Jobs / Ray Train
- Ran LLMs in parallel across 3 DGX nodes and experimented with **LoRA fine-tuning** on in-house domain data
- Built shared `config.json` / `raylaunch.py` modules to **separate model training code from infrastructure settings**
- Standardized GPU allocation and checkpoint / artifact storage on shared storage
- Resolved Jetson (ARM64) GPU runtime, container, and networking compatibility issues
- Integrated Prometheus / Grafana resource monitoring and MLflow experiment tracking
- Measured 3-node training throughput and inter-node communication bottlenecks

![Ray dashboard — node and resource status](/projects/gpu-ray-platform/cluster.png)
*Ray dashboard: node and CPU / GPU resource status.*

![Ray dashboard — job list](/projects/gpu-ray-platform/jobs.png)
*Training jobs submitted through the Ray Jobs API.*

## Before → After

| Before | After |
|---|---|
| Runtime settings differed across GPU types and ARM64 | Standardized job submission and resource usage on Ray |
| Each training run launched and saved results differently | Shared module and checkpoint path convention |
| Job status and results tracked in scattered places | Unified status and experiment history in Grafana and MLflow |
| No environment for domain LLM experiments | In-house domain LLM fine-tuning environment |
