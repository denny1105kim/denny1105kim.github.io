// 사이트 전체에서 쓰는 개인 정보. 대부분 여기만 고치면 반영돼요.
export const SITE = {
  name: 'Jae Hyeon Kim',
  nameKo: '김재현',
  title: 'Jae Hyeon Kim · 김재현',
  role: 'Software Engineer (AI Optimized Engineer)',
  company: 'CoAsia',
  location: 'Hwaseong, Korea',
  description:
    'Embedded Linux에서 출발해 Edge AI 추론 최적화, 로컬 LLM·RAG, Kubernetes·Ray 기반 AI 학습 플랫폼까지 다루는 소프트웨어 엔지니어 김재현입니다.',
  avatar: '/avatar.jpg',
};

// 비워두면('') 화면에 표시되지 않아요.
export const SOCIALS = {
  email: 'denny1105kim@gmail.com',
  github: 'https://github.com/denny1105kim',
  linkedin: '',
  resume: '', // 예: '/resume.pdf' (public 폴더에 PDF 넣기)
};

export const HIGHLIGHTS = [
  {
    value: '7,150',
    label: '빌드 에러 해결 사례 KB',
    detail: '공개 자료 159만 건 수집·선별',
  },
  {
    value: '13 × 11,700',
    label: '로컬 LLM · 평가 답변',
    detail: 'CPU/GPU 동일 조건 비교',
  },
  {
    value: '7 GPU nodes',
    label: 'DGX ×3 · Jetson ×4',
    detail: 'Kubernetes · KubeRay 플랫폼',
  },
];

export const STRENGTHS = [
  {
    title: '로컬 LLM · RAG',
    body: '폐쇄망에서 쓸 로컬 LLM 기반 빌드 오류 진단 RAG를 데이터 수집부터 평가까지 설계했습니다. FAISS·BM25 Hybrid, Graph 검색과 모델 13종을 같은 문항으로 비교했습니다.',
  },
  {
    title: 'AI 학습 플랫폼',
    body: 'x86·DGX·Jetson 이기종 GPU를 k3s·KubeRay·Ray Train으로 연결하고, 작업 제출 규약·체크포인트·MLflow·Grafana 모니터링을 표준화했습니다.',
  },
  {
    title: 'Embedded Linux · 추론 최적화',
    body: 'Yocto 기반 ARM64 BSP 포팅, U-Boot·Kernel·Device Tree·ROS 2 통합부터 INT8 양자화·프루닝, NPU·TensorRT 추론 검증까지 디바이스 끝단을 다룹니다.',
  },
];

export const EXPERIENCE = [
  {
    period: '2023.02 — 현재',
    org: 'CoAsia (코아시아)',
    team: 'Solution 개발팀',
    title: 'Software Engineer (AI Optimized Engineer)',
    items: [
      { period: '2026.02 —', text: 'K-On Device: 비전 모델 INT8 양자화·프루닝, NPU·TensorRT 추론 검증' },
      { period: '2025.08 —', text: 'Jetson 4대·DGX 3대 Kubernetes/KubeRay 학습·LLM 플랫폼 구축·운영' },
      { period: '2025.02 — 2026.01', text: 'Exynos Auto V920 NPU 추론 애플리케이션 개발 (ENN SDK)' },
      { period: '2023.12 — 2025.03', text: 'Yocto BSP·Kernel·U-Boot 포팅 및 ROS 2 구동 환경 통합' },
      { period: '2023.02 —', text: 'Gerrit·Jenkins·Artifactory CI, Docker 기반 개발·검증 환경' },
    ],
  },
  {
    period: '2021.04 — 2022.05',
    org: 'KCTECH (케이씨텍)',
    team: 'Cleaning 양산기술팀',
    title: 'Customer Engineer',
    items: [
      { text: '반도체 Wet Cleaning 장비 설치·Set-Up 및 양산 안정화 지원' },
      { text: '고객사 FAB 현장 설비 장애·알람 원인 분석과 기술 대응' },
    ],
  },
];

export const PUBLICATION = {
  titleKo: '온프레미스 폐쇄망의 제한된 연산 자원 환경에서 임베디드 빌드 에러 진단을 위한 로컬 LLM 및 RAG 구성',
  titleEn: 'Local LLM and RAG Configuration for Embedded Build Error Diagnosis in Resource-Constrained On-Premises Closed Networks',
  venue: 'M.S. Thesis, Dept. of Artificial Intelligence, Ajou University',
  advisor: '지도교수 최재영',
  year: '2026',
  status: '심사 중',
  keywords: ['On-Premises', 'Local LLM', 'RAG', 'Embedded Build Error', 'Error Diagnosis'],
  results: [
    '정답 사례가 KB에 있으면 Dense·Hybrid 검색으로 평균 성공률 약 90%',
    '정답 사례 제외 시 No-RAG 22% → Hybrid 31~33%로 개선',
    '검색 지연은 전체 응답 시간의 0.1%(노트북)~3%(워크스테이션) 미만',
    '노트북: Qwen3 8B + Hybrid / 워크스테이션: Ministral 3 8B + Hybrid 선정',
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
    period: '2024.03 — 2027.02',
    title: '인공지능학과 석사 (2027.02 졸업 예정)',
    org: '아주대학교 정보통신대학원',
  },
  {
    period: '2012.03 — 2020.08',
    title: '신소재공학과 학사',
    org: '전북대학교',
  },
];

export const ACTIVITIES = [
  { period: '2026.07 — 08', text: 'Physical AI 로봇 융합 과정' },
  { period: '2025.10 — 2026.01', text: 'AI Master Course 4기 · AI Agent 기반 시스템 개발' },
  { period: '2025.08', text: 'NVIDIA · Mastering LLM Optimization with RAG & Prompt Engineering' },
  { period: '2024', text: 'Google Python Course' },
  { period: '2022.08 — 11', text: 'KAIST IDEC 교육' },
];
