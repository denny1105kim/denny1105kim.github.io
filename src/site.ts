// Personal info used across the site. Most edits only need this file.
export const SITE = {
  name: 'Denny Kim',
  legalName: 'Jae Hyeon Kim',
  nameKo: '김재현',
  shortName: 'Denny Kim',
  title: 'Denny Kim (Jae Hyeon Kim)',
  role: 'Software Engineer (AI Optimized Engineer)',
  focus: 'AI Platform · On-Device AI',
  company: 'CoAsia',
  companyUrl: 'https://www.coasia.com',
  degree: 'M.S. in Artificial Intelligence',
  school: 'Ajou University',
  schoolUrl: 'https://www.ajou.ac.kr',
  degreeNote: 'Expected Feb 2027 · Thesis under review',
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
  resume: '/resume.pdf', // e.g. '/resume.pdf' (put the PDF in /public)
  portfolio: '/portfolio.pdf', // e.g. '/portfolio.pdf'
};

export const EXPERIENCE = [
  {
    period: 'Feb 2023 — Present',
    org: 'CoAsia',
    team: 'Solution Development Team',
    title: 'Software Engineer (AI Optimized Engineer)',
    items: [
      { period: 'Feb 2026 —', text: 'Vision model optimization and GPU acceleration on Jetson & NPU' },
      { period: 'Aug 2025 —', text: 'GPU training & LLM platform on 3 DGX + 4 Jetson nodes' },
      { period: 'Feb 2025 — Jan 2026', text: 'NPU inference apps on Exynos Auto V920' },
      { period: 'Dec 2023 — Mar 2025', text: 'Yocto BSP and ROS 2 for a robot controller' },
    ],
  },
  {
    period: 'Apr 2021 — May 2022',
    org: 'KCTECH',
    team: 'Cleaning Mass-Production Engineering Team',
    title: 'Customer Engineer',
    items: [
      { text: 'Set-up and mass-production support for semiconductor wet-cleaning equipment' },
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
    '7,150-case knowledge base and 13 local LLMs compared',
    'Hybrid RAG lifts success rate from 22% to 31–33% on unseen errors',
  ],
};

export const SKILLS = [
  { group: 'Languages', items: ['C', 'C++', 'Python'] },
  { group: 'Edge AI', items: ['TensorRT', 'NPU', 'ONNX', 'INT8', 'Vulkan'] },
  { group: 'ML Infra', items: ['Kubernetes', 'KubeRay', 'MLflow', 'Grafana'] },
  { group: 'LLM / RAG', items: ['FAISS', 'BM25', 'llama.cpp', 'pgvector'] },
  { group: 'Embedded', items: ['Yocto', 'Linux Kernel', 'ROS 2'] },
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
