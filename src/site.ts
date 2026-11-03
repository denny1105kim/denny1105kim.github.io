// Personal info used across the site. Most edits only need this file.
export const SITE = {
  name: 'Denny Kim',
  legalName: 'Jae Hyeon Kim',
  nameKo: '김재현',
  shortName: 'Denny Kim',
  title: 'Denny Kim (Jae Hyeon Kim)',
  role: 'Software Engineer (AI Optimized Engineer)',
  company: 'CoAsia',
  location: 'Hwaseong, South Korea',
  description:
    'Embedded software engineer turned edge AI engineer — board bring-up and device drivers, on-device inference optimization, and on-premises local LLM & RAG research.',
  avatar: '/avatar.jpg',
};

// Leave a value empty ('') to hide it.
export const SOCIALS = {
  email: 'denny1105kim@gmail.com',
  github: 'https://github.com/denny1105kim',
  linkedin: 'https://www.linkedin.com/in/jae-hyeon-kim-60851123b/',
  resume: '', // e.g. '/resume.pdf' (put the PDF in /public)
};

export const HIGHLIGHTS = [
  {
    area: 'Embedded Linux',
    value: 'ARM64 BSP',
    label: 'Yocto BSP for a robot controller',
    detail: 'U-Boot · kernel · device tree · drivers · ROS 2',
  },
  {
    area: 'Edge AI',
    value: 'INT8 + Pruning',
    label: 'Vision models on NPU & Jetson Orin',
    detail: 'Face · object · stereo depth · TensorRT',
  },
  {
    area: 'Research',
    value: '7,150 cases',
    label: 'On-prem RAG for build-error diagnosis',
    detail: '13 local LLMs · 11,700 graded answers',
  },
];

export const STRENGTHS = [
  {
    title: 'Embedded Linux',
    body: 'Where I started. Yocto-based ARM64 BSPs, U-Boot and Linux kernel porting, device tree and device-driver debugging, board bring-up, and cross-compiling ROS 2 with the Yocto SDK — plus the Gerrit / Jenkins / Artifactory CI around it.',
  },
  {
    title: 'Distributed Computing',
    body: 'Built and run a heterogeneous GPU cluster — 3 DGX and 4 Jetson nodes — on Kubernetes and KubeRay. Standardized Ray job submission and checkpointing, ran parallel LLM serving and LoRA fine-tuning, and wired up Prometheus, Grafana and MLflow.',
  },
  {
    title: 'Edge AI',
    body: 'Bring PyTorch / ONNX models onto real devices: conversion for Exynos NPUs and TensorRT, INT8 quantization and structured pruning, and validation of accuracy, latency, FPS and memory for face, object and stereo-depth models.',
  },
  {
    title: 'Research · On-Prem LLM & RAG',
    body: 'M.S. thesis on diagnosing embedded build errors in air-gapped networks: a 7,150-case knowledge base curated from 1.59M public records, hybrid (Dense + BM25) and graph retrieval, and 13 local LLMs benchmarked on CPU and GPU.',
  },
];

export const EXPERIENCE = [
  {
    period: 'Feb 2023 — Present',
    org: 'CoAsia',
    team: 'Solution Development Team',
    title: 'Software Engineer (AI Optimized Engineer)',
    items: [
      { period: 'Feb 2026 —', text: 'K-On Device: INT8 quantization & pruning of vision models, NPU / TensorRT inference validation' },
      { period: 'Aug 2025 —', text: 'Built and operate a Kubernetes / KubeRay training & LLM platform on 4 Jetsons and 3 DGX nodes' },
      { period: 'Feb 2025 — Jan 2026', text: 'NPU inference applications on Exynos Auto V920 (ENN SDK)' },
      { period: 'Dec 2023 — Mar 2025', text: 'Yocto BSP, kernel and U-Boot porting; ROS 2 runtime integration' },
      { period: 'Feb 2023 —', text: 'CI with Gerrit · Jenkins · Artifactory; Docker-based dev & validation environments' },
    ],
  },
  {
    period: 'Apr 2021 — May 2022',
    org: 'KCTECH',
    team: 'Cleaning Mass-Production Engineering Team',
    title: 'Customer Engineer',
    items: [
      { text: 'Installed and set up semiconductor wet-cleaning equipment; supported mass-production stabilization' },
      { text: 'Root-caused equipment failures and alarms on customer fab sites and provided technical support' },
    ],
  },
];

export const PUBLICATION = {
  title:
    'Local LLM and RAG Configuration for Embedded Build Error Diagnosis in Resource-Constrained On-Premises Closed Networks',
  venue: 'M.S. Thesis, Dept. of Artificial Intelligence, Graduate School of ICT, Ajou University',
  advisor: 'Advisor: Prof. Jaeyoung Choi',
  year: '2026',
  status: 'Under review',
  keywords: ['On-Premises', 'Local LLM', 'RAG', 'Embedded Build Error', 'Error Diagnosis'],
  results: [
    'With the source case in the KB, Dense / Hybrid retrieval reaches ~90% average success rate',
    'Without it, success rate improves from 22% (no RAG) to 31–33% (Hybrid)',
    'Retrieval latency is <0.1% (laptop) to <3% (workstation) of total response time',
    'Selected Qwen3 8B + Hybrid for laptops and Ministral 3 8B + Hybrid for workstations',
  ],
  link: '/projects/thesis-build-error-rag/',
};

export const SKILLS = [
  { group: 'Languages', items: ['C', 'C++', 'Python', 'Shell'] },
  { group: 'LLM / RAG', items: ['FAISS', 'BM25', 'Ollama', 'llama.cpp', 'pgvector', 'LoRA'] },
  { group: 'ML Infra', items: ['Kubernetes', 'k3s', 'KubeRay', 'Ray Train', 'MLflow', 'Prometheus', 'Grafana', 'GitOps'] },
  { group: 'Edge AI', items: ['Jetson', 'TensorRT', 'ONNX', 'NPU', 'INT8 Quantization', 'Pruning'] },
  { group: 'Embedded', items: ['Yocto', 'Linux Kernel', 'U-Boot', 'Device Tree', 'ROS 2'] },
  { group: 'DevOps', items: ['Docker', 'Jenkins', 'Gerrit', 'Artifactory'] },
];

export const EDUCATION = [
  {
    period: 'Mar 2024 — Feb 2027',
    title: 'M.S. in Artificial Intelligence (expected Feb 2027)',
    org: 'Ajou University, Graduate School of ICT',
  },
  {
    period: 'Mar 2012 — Aug 2020',
    title: 'B.S. in Materials Science and Engineering',
    org: 'Jeonbuk National University',
  },
];

export const ACTIVITIES = [
  { period: 'Jul — Aug 2026', text: 'Physical AI & Robotics Convergence Program' },
  { period: 'Oct 2025 — Jan 2026', text: 'AI Master Course (4th cohort) · AI agent-based system development' },
  { period: 'Aug 2025', text: 'NVIDIA · Mastering LLM Optimization with RAG & Prompt Engineering' },
  { period: '2024', text: 'Google Python Course' },
  { period: 'Aug — Nov 2022', text: 'KAIST IDEC Training Program' },
];
