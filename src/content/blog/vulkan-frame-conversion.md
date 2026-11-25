---
title: 'From 17 to 30 fps on Jetson: moving frame conversion to Vulkan'
description: 'The bottleneck was not the model. It was the CPU copying pixels.'
date: 2026-11-25
tags: ['edge-ai', 'jetson', 'vulkan']
---

When we raised the display from 640×480 to 1440×1080, our face and hand recognition apps on Jetson Orin Nano Super dropped from 30 fps to 15–18 fps. The first guess was inference. Profiling said otherwise: the time went into **converting camera frames for the display on the CPU**.

## The fix

```
Camera 640×480 YUYV → Vulkan compute shader → 1440×1080 display buffer → 30 fps
```

- Moved color conversion and upscaling into a **Vulkan compute shader**, one thread per pixel
- Plugged it into the existing conversion class (+123 lines) and kept the CPU path as an automatic fallback
- Kept small crops on the CPU, because the GPU was measurably slower for them

## What broke on the way

- **Screen tearing** from CPU/GPU memory sync on DMA-BUF buffers
- **Segfault on exit** caused by the order Vulkan objects were released

## Result

| App | CPU | Vulkan |
|---|---|---|
| face_detection | 17.6 fps | **30.0 fps** |
| face_recognition | 15.0 fps | **20.0 fps** |
| handpose | 16.2 fps | **30.0 fps** |

One frame conversion went from 23–31 ms to 8–10 ms, about 3× faster.
