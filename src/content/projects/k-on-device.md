---
title: 'K-On Device 컴퓨터 비전 최적화'
subtitle: 'Edge AI Inference Optimization'
description: '임베디드 NPU와 Jetson Orin에 얼굴 인식·객체 검출·스테레오 깊이 추정 모델을 경량화해 배포하고 추론 결과를 검증.'
period: '2026.02 — 현재'
kind: '회사 프로젝트 · 8명'
order: 3
tags: ['TensorRT', 'NPU', 'ONNX', 'INT8', 'Pruning', 'Jetson Orin', 'PyTorch']
metrics:
  - { value: 'FP16 / INT8', label: '정밀도별 정확도·성능 검증' }
  - { value: '3 tasks', label: '얼굴 · 객체 · 깊이 추정' }
---

## 개요

임베디드 디바이스에서 다양한 컴퓨터 비전 모델을 변환·배포하고, 경량화 후의 추론 결과와 실행 성능을 검증합니다.

```
Camera Frame → GPU 전처리 (resize · normalize) → NPU / TensorRT 추론 → 후처리 · 검증
```

## 담당 역할

- PyTorch · ONNX 모델을 **NPU · TensorRT 런타임 형식으로 변환**하고 입출력 연동
- **INT8 양자화 · 구조적 프루닝**으로 비전 모델 경량화
- 얼굴 검출·인식, 객체 검출, 스테레오 깊이 추정(BEV) 모델 적용
- FP16 / INT8 변환 후 정확도·추론 성능 비교
- 처리 단계별 지연시간·메모리 측정, 실제 기기 구동 이슈 분석

## AS-IS → TO-BE

| AS-IS | TO-BE |
|---|---|
| 타깃별 런타임·텐서 형식과 실행 경로가 상이 | 공통 전처리 → 추론 → 후처리 흐름 구축 |
| 변환 후 출력 검증·재현 방법이 분산 | 동일 입력·조건으로 실행하고 출력 비교 |
