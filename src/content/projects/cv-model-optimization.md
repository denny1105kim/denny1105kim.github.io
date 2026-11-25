---
title: 'Real-time Edge Vision'
subtitle: 'Jetson · NPU · Vulkan'
description: 'Real-time face & hand recognition on Jetson. Moved frame conversion to a Vulkan compute shader, lifting the apps from 17.6 to 30 fps.'
period: 'Feb 2026 — Present'
kind: 'Company · Team of 8'
order: 1
cover: '/projects/cv-model-optimization/cover.jpg'
coverAlt: 'Face detection and recognition running on device'
tags: ['TensorRT', 'NPU', 'Vulkan', 'C++', 'ONNX', 'INT8', 'Pruning', 'Jetson Orin', 'PyTorch']
metrics:
  - { value: '30 fps', label: 'High-res face & hand apps on Jetson' }
  - { value: '~3× faster', label: 'Frame conversion, 23–31 → 8–10 ms' }
  - { value: 'FP16 / INT8', label: 'Quantization · pruning on NPU & TensorRT' }
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

- Build the **C++ face & hand recognition pipeline** on Jetson; train SCRFD, MobileFaceNet and YOLO11n, fine-tune RTMPose-m
- **Convert PyTorch / ONNX models to NPU and TensorRT runtime formats** and wire up I/O
- Compress vision models with **INT8 quantization and structured pruning**
- Apply face detection & recognition, object detection, and stereo depth (BEV) models
- Compare accuracy and inference performance after FP16 / INT8 conversion
- Profile per-stage latency and memory; debug on-device issues

## Deep dive: Vulkan GPU frame conversion

Raising the display to 1440×1080 dropped the apps from 30 to 15–18 fps. Profiling showed the bottleneck was not inference but **CPU frame conversion**.

```
Camera 640×480 YUYV → Vulkan compute shader (color convert · upscale) → 1440×1080 display buffer → 30 fps
```

- Moved display-buffer conversion to the GPU with a **Vulkan compute shader** that converts and scales pixels in parallel
- Plugged it into the existing conversion class (+123 lines) with **automatic CPU fallback** on failure
- Fixed DMA-BUF CPU/GPU memory sync (screen tearing) and Vulkan object teardown order (segfault on exit)
- Measured small crops and kept them on the CPU, where the GPU was slower

| App | CPU conversion | GPU conversion |
|---|---|---|
| face_detection | 17.6 fps | **30.0 fps** |
| face_recognition | 15.0 fps | **20.0 fps** |
| handpose | 16.2 fps | **30.0 fps** |

Frame conversion went from **23–31 ms to 8–10 ms** (about 3× faster).

## Before → After

| Before | After |
|---|---|
| Runtimes, tensor formats and execution paths differed per target | Common pre-processing → inference → post-processing pipeline |
| Post-conversion output checks and reproduction were ad hoc | Same inputs and conditions, outputs compared side by side |
