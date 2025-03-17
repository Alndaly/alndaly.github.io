---
title: yolov8结合opencv实时检测物体并且做出自定义响应
---

```python
import cv2
import torch
from ultralytics import YOLO
from ultralytics.yolo.utils.plotting import Annotator
from transformers import pipeline

# Create a new YOLO model from scratch
model = YOLO('yolov8n.yaml')

# Load a pretrained YOLO model (recommended for training)
model = YOLO('yolov8n.pt')

# Train the model using the 'coco128.yaml' dataset for 3 epochs
model.train(data='coco128.yaml', epochs=3)

capture = cv2.VideoCapture(0)

def do_something():
    ...

while(True):
    # 获取一帧
    ret, image = capture.read()
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    annotator = Annotator(image)
    results = model(image, stream=False, verbose=False)
    for item in results:
        person_code = 0.0
        # 判断是否存在人
        if(person_code in item.boxes.cls.tolist()):
            print("检测到人出现")
            print("位置: {}".format(item.boxes.boxes[item.boxes.cls.tolist().index(person_code)]))
            print("可信度: {}".format(item.boxes.conf.tolist()[item.boxes.cls.tolist().index(person_code)]))
            annotator.box_label(item.boxes.xyxy[item.boxes.cls.tolist().index(person_code)], f"person {item.boxes.conf.tolist()[item.boxes.cls.tolist().index(person_code)]}")
            # 此处可以增加自定义操作
            do_something()

    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
    cv2.imshow('frame', image)
    if cv2.waitKey(1) == ord('q'):
        break
```