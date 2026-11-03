---
title: '로컬 LLM · Hybrid RAG 빌드 오류 진단'
subtitle: 'Master’s Thesis Research'
description: '외부 API를 쓸 수 없는 폐쇄망에서 임베디드 C/C++ 빌드 오류를 로컬 LLM과 검색된 해결 사례로 진단하는 구성을 실측으로 선정한 연구.'
period: '2024.03 — 2026.10'
kind: '석사학위 연구 · 아주대학교'
order: 1
tags: ['Local LLM', 'RAG', 'FAISS', 'BM25', 'Graph RAG', 'llama.cpp', 'Evaluation']
metrics:
  - { value: '1.59M → 7,150', label: '수집 자료 → 해결 사례 KB' }
  - { value: '13', label: '3B~8B 로컬 LLM 비교' }
  - { value: '11,700', label: '정답성 평가 답변' }
  - { value: '22% → 33%', label: '정답 사례 제외 시 No-RAG → Hybrid SR' }
---

## 배경

임베디드 빌드 에러는 소스 코드만으로는 원인을 알기 어렵고, 툴체인·빌드 설정·대상 하드웨어의 관계를 함께 봐야 해결할 수 있습니다. 제품 소스와 로그의 외부 반출이 제한되는 조직에서는 **온프레미스 폐쇄망**에서 모델을 운용해야 하는데, 이때 두 가지 제약이 따릅니다.

- 내부 장비의 **연산 자원이 제한적**이다.
- 소형 로컬 LLM만으로는 **특정 툴체인·버전에 맞는 해결 지식**이 부족하다.

## 접근

1. **지식베이스 구축** — GitHub 이슈, Stack Overflow, GCC Bugzilla 등 공개 자료 약 159만 건을 수집하고, 규칙 기반 선별과 LLM 구조화 추출로 *에러 메시지 · 문제 상황 · 근본 원인 · 해결 조치 · 환경 메타데이터*를 갖춘 **7,150건**의 해결 사례를 만들었습니다.
2. **검색 구성** — Dense, Hybrid(Dense + BM25, RRF), Graph, Vector+Graph와 검색 미사용(No-RAG)을 비교했습니다.
3. **모델 · 기기** — 3B~8B급 로컬 LLM 13종을 GPU 없는 노트북과 GPU 워크스테이션에서 llama.cpp 기반 런타임으로 실행했습니다.
4. **평가** — 공통 50문항을 정답 사례 *포함 / 제외* 두 조건으로 나누고, Claude Sonnet을 평가 모델로 해결 조치의 일치 여부를 0~2점으로 판정해 성공률(SR)·엄격 정답률(SA)과 응답 시간을 집계했습니다.

## 결과

- 정답 사례가 지식베이스에 있으면 Dense·Hybrid 검색으로 **평균 SR 약 90%** — 기록된 해결책 재활용에 매우 효과적.
- 정답 사례를 빼면 **No-RAG 22% → Hybrid 31~33%** — 이득은 있지만 폭이 훨씬 작음.
- Hybrid가 정답 사례 제외 조건에서 두 기기 모두 가장 높은 평균 SR.
- 검색 지연은 전체 응답 시간의 **노트북 0.1% 미만, 워크스테이션 3% 미만** — 응답 시간은 주로 모델과 기기가 결정.

| 기기 | 최종 구성 | 선정 이유 |
|---|---|---|
| 노트북 (CPU) | **Qwen3 8B + Hybrid** | SR은 8%p 낮지만 응답 시간 절반 이하 |
| 워크스테이션 (GPU) | **Ministral 3 8B + Hybrid** | 두 조건 모두 가장 높은 성공률 |

두 구성 모두 모델 가중치와 지식베이스를 미리 반입하면 외부 연결 없이 내부 장비에서 운용할 수 있습니다.

> **Thesis** — 온프레미스 폐쇄망의 제한된 연산 자원 환경에서 임베디드 빌드 에러 진단을 위한 로컬 LLM 및 RAG 구성 (*Local LLM and RAG Configuration for Embedded Build Error Diagnosis in Resource-Constrained On-Premises Closed Networks*), 아주대학교 정보통신대학원 인공지능학과, 2026.
