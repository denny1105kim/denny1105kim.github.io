---
title: 'Computer Vision Model Optimization'
subtitle: 'Edge AI Inference Optimization'
description: 'Compress and deploy face recognition, object detection and stereo depth models on embedded NPUs and Jetson Orin, and validate their inference results.'
period: 'Feb 2026 — Present'
kind: 'Company project · Team of 8'
order: 3
cover: '/projects/cv-model-optimization/face.jpg'
coverAlt: 'Face detection and recognition running on device'
tags: ['TensorRT', 'NPU', 'ONNX', 'INT8', 'Pruning', 'Jetson Orin', 'PyTorch']
metrics:
  - { value: 'FP16 / INT8', label: 'Accuracy & speed per precision' }
  - { value: '3 tasks', label: 'Face · objects · stereo depth' }
---

## Overview

Convert and deploy a range of computer vision models on embedded devices, then validate inference results and runtime performance after compression.

```
Camera frame → GPU pre-processing (resize · normalize)
  → NPU / TensorRT inference → post-processing · validation
```

![Face detection and recognition on device](/projects/cv-model-optimization/face.jpg)
*Face detection & recognition running on the device.*

![Object detection and stereo depth estimation with BEV](/projects/cv-model-optimization/depth.jpg)
*Object detection + stereo depth estimation (BEV) — Jetson-based application and inference validation.*

## What I do

- **Convert PyTorch / ONNX models to NPU and TensorRT runtime formats** and wire up I/O
- Compress vision models with **INT8 quantization and structured pruning**
- Apply face detection & recognition, object detection, and stereo depth (BEV) models
- Compare accuracy and inference performance after FP16 / INT8 conversion
- Profile per-stage latency and memory; debug on-device issues

## Before → After

| Before | After |
|---|---|
| Runtimes, tensor formats and execution paths differed per target | Common pre-processing → inference → post-processing pipeline |
| Post-conversion output checks and reproduction were ad hoc | Same inputs and conditions, outputs compared side by side |
