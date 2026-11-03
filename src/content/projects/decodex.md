---
title: 'DecodeX'
subtitle: 'News Analysis · RAG Web Service'
description: '투자 뉴스를 수집·정리하고 LLM 요약·감성 분석과 pgvector 임베딩 검색을 결합해 질의응답을 제공하는 웹 서비스.'
period: '2025.10 — 2026.01'
kind: '팀 프로젝트 · 5명 · AI Master Course'
order: 5
tags: ['Django', 'React', 'PostgreSQL', 'pgvector', 'ETL', 'LLM']
repo: 'https://github.com/denny1105kim'
metrics:
  - { value: 'ETL → RAG', label: '뉴스 수집부터 질의응답까지' }
---

## 개요

```
뉴스 ETL → LLM 요약 · 감성 분석 → Embedding (pgvector) → 검색 · 질의응답
```

Backend는 Django / PostgreSQL · pgvector, Frontend는 React로 구성했습니다.

## 담당 역할

- 투자 뉴스 크롤링 및 ETL 파이프라인 구성
- LLM 기반 기사 요약 · 감성 분석
- 텍스트 임베딩 생성과 pgvector 유사도 검색
- Django API · 데이터 모델과 React 화면 연계
- 관련 뉴스 검색과 사용자 질의응답 연결

## AS-IS → TO-BE

| AS-IS | TO-BE |
|---|---|
| 뉴스 데이터가 여러 출처에 분산 | 수집·요약 과정 자동화 |
| 키워드 검색만으로는 유사 기사 탐색에 한계 | 임베딩 검색으로 관련 문서 탐색, 분석 결과와 Q&A를 웹에서 제공 |
