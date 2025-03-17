---
title: 视频处理
---

## m3u8文件生成以及视频分段切片

```shell
ffmpeg -i /Users/kinda/Desktop/生活/test.mp4  -c copy -map 0 -f segment -segment_time 10 -segment_list playlist.m3u8 -segment_format mpegts output_%03d.ts
```