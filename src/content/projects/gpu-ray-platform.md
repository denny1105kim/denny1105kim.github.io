---
title: '이기종 GPU 분산 학습 · LLM 플랫폼'
subtitle: 'Kubernetes · KubeRay Platform'
description: 'DGX 3대와 Jetson 4대를 Kubernetes·KubeRay로 묶어 공통 학습·도메인 LLM 실험 환경을 단독으로 구축·운영.'
period: '2025.08 — 현재'
kind: '회사 내부 프로젝트 · 단독'
order: 2
tags: ['Kubernetes', 'k3s', 'KubeRay', 'Ray Train', 'MLflow', 'Prometheus', 'Grafana', 'LoRA']
metrics:
  - { value: 'DGX ×3', label: 'LLM 병렬 실행 · LoRA' }
  - { value: 'Jetson ×4', label: 'Edge 학습 · 추론' }
  - { value: '1 module', label: '공통 학습 실행 규약' }
---

## 개요

사내 x86 · DGX GB10 · Jetson GPU 자원을 하나의 클러스터로 연결하고, 누구나 같은 방식으로 학습 작업을 제출·추적할 수 있는 환경을 만들었습니다. 지금도 지속적으로 업데이트·유지보수 중입니다.

## 담당 역할

- Kubernetes(k3s) · KubeRay · Ray Jobs / Ray Train 환경 구축
- DGX 3노드 병렬 LLM 실행과 사내 도메인 데이터 **LoRA 파인튜닝** 실험
- `config.json` · `raylaunch.py` 공통 모듈로 **모델 학습 코드와 인프라 실행 설정 분리**
- GPU 자원 할당, 체크포인트·산출물 저장 구조 표준화 (공유 저장소)
- Jetson(ARM64) GPU 런타임 · 컨테이너 · 네트워크 호환성 문제 대응
- Prometheus · Grafana 자원 모니터링과 MLflow 실험 기록 연동
- 3노드 학습 처리량과 노드 간 통신 병목 실측

## AS-IS → TO-BE

| AS-IS | TO-BE |
|---|---|
| 이기종 GPU·ARM64 간 런타임 설정이 제각각 | Ray 기반 작업 제출 및 자원 사용 표준화 |
| 학습마다 실행·저장 방법 불일치 | 공통 모듈과 체크포인트 경로 규약 |
| 작업 상태·결과 추적이 분산 | Grafana · MLflow로 상태와 실험 이력 통합 관리 |
| 도메인 LLM 실험 환경 부재 | 사내 도메인 LLM 파인튜닝 환경 확보 |
