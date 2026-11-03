---
title: 'AISTOCK'
subtitle: 'Data · ML · LLM Automated Trading Ops'
description: '시장 데이터 수집·검증, ML 선별, 권한이 제한된 LLM 심사, 주문·대조·운영 점검까지 연결한 자동 매매·운영 시스템.'
period: '2026.06 — 현재'
kind: '개인 프로젝트 · 설계/개발/운영'
order: 4
tags: ['Kubernetes', 'TimescaleDB', 'ML', 'LLM', 'Claude Code', 'Codex']
metrics:
  - { value: '4 nodes', label: '역할별 Kubernetes 노드' }
  - { value: 'PIT', label: '시점 정합 데이터 품질관문' }
---

## 개요

```
수집 (API / 뉴스) → 검증 (PIT / 품질) → 결정 (ML / LLM) → 운영 (점검 / 복구)
```

운영의 안정성과 **데이터 누수 방지**를 가장 중요한 목표로 두고, 장애를 검출하면 재발 방지 규칙과 자동 점검으로 연결하는 구조로 만들었습니다.

## 담당 역할

- Kubernetes 워크로드 역할 분리 — 관리(배포·LLM 브리지) / DB(주서버·예비) / GPU(허용 목록) / 기본 워커(수집·검증·주문·리스크)
- TimescaleDB 기반 **시점 정합(Point-in-Time) 데이터** 수집·검증과 쿼리 개선
- ML 워크포워드 검증, 실주문·잔고 대조
- LLM 보조 심사 — 권한과 위험 작업을 통제한 제한적 사용
- **Harness**: 정기 점검 · 이상 탐지 · 사고 원장 자동 기록
- **HERMES**: 사고 원인 분류 · 복구 실행 · 결과 검증 자동화
- Claude Code · Codex · Beads로 작업 관리

## AS-IS → TO-BE

| AS-IS | TO-BE |
|---|---|
| 수집·판정·매매가 분산되어 장애 파악이 어려움 | 역할별 노드 배치와 단일 주문 경로 |
| 수집 누락 · 시점 누수 · 중복 실행 위험 | PIT 품질관문과 점검 → 사고 분류 → 복구 검증 표준화 |
| LLM 판단의 위험 | LLM 심사 권한 및 위험 작업 통제 |
