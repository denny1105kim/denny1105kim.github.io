// Personal info used across the site. Most edits only need this file.
export const SITE = {
  name: 'Jae Hyeon Kim',
  nameKo: '김재현',
  shortName: 'JH Kim',
  title: 'Jae Hyeon Kim',
  role: 'Software Engineer (AI Optimized Engineer)',
  company: 'CoAsia',
  location: 'Hwaseong, South Korea',
  description:
    'Software engineer working across embedded Linux, edge AI inference optimization, on-premises local LLM & RAG, and Kubernetes/Ray-based AI training platforms.',
  avatar: '/avatar.jpg',
};

// Leave a value empty ('') to hide it.
export const SOCIALS = {
  email: 'denny1105kim@gmail.com',
  github: 'https://github.com/denny1105kim',
  linkedin: '',
  resume: '', // e.g. '/resume.pdf' (put the PDF in /public)
};

export const HIGHLIGHTS = [
  {
    value: '7,150',
    label: 'Build-error resolution cases',
    detail: 'Curated from 1.59M public records',
  },
  {
    value: '13 × 11,700',
    label: 'Local LLMs · graded answers',
    detail: 'Same questions on CPU & GPU',
  },
  {
    value: '7 GPU nodes',
    label: 'DGX ×3 · Jetson ×4',
    detail: 'Kubernetes · KubeRay platform',
  },
];

export const STRENGTHS = [
  {
    title: 'Local LLM · RAG',
    body: 'Designed an air-gapped, local-LLM RAG system for diagnosing embedded build errors — from data collection to evaluation. Compared FAISS + BM25 hybrid and graph retrieval across 13 models on identical questions.',
  },
  {
    title: 'AI Training Platform',
    body: 'Connected heterogeneous x86, DGX and Jetson GPUs with k3s, KubeRay and Ray Train, and standardized job submission, checkpointing, and MLflow/Grafana monitoring.',
  },
  {
    title: 'Embedded Linux · Inference Optimization',
    body: 'Work all the way down to the device: Yocto-based ARM64 BSP porting, U-Boot / kernel / device tree / ROS 2 integration, INT8 quantization and pruning, and NPU / TensorRT inference validation.',
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
