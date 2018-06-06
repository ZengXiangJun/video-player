## Enhancer三方组件 video-player 使用说明
### 查看Demo 【账号】visit 【密码】111111
### 简介 [Demo](http://47.96.99.14:5301/#114)
- video-player是基于[Enhancer](https://enhancer.io)平台开发的组件, 能在此平台上良好运行。
- video-player支持 video/ogg video/mp4 video/webm格式的HTML5视频播放组件。

### 生成界面
![](https://github.com/ZengXiangJun/video-player/blob/master/images/2.jpg)
### 配置界面
![](https://github.com/ZengXiangJun/video-player/blob/master/images/1.png)

### 使用说明
- 在[Enhancer](https://enhancer.io)上注册，新建项目使用此组件。
- 在图二界面设置组件的数据源，及相关配置。

### 数据源设置
- 数据源格式说明：视频来源的格式只能是 video/ogg video/mp4 video/webm，如 2 所示。
```
1. 'https://enhancer.io/video/1.mp4'  【必须】url字符串
或
2.  {
      "rows": [{"video": "https://enhancer.io/video/1.mp4"}]
    }
```

### 组件功能
通过url生成视频播放组件


### 可用事件说明
#### 视频载入（on Video Ready）
- 【事件 ID】onVideoReady
- 【触发时机】视频载入时

#### 视频播放（On Video Start）
- 【事件 ID】onVideoStart
- 【触发时机】视频播放时

#### 视频暂停（On Video Stop）
- 【事件 ID】onVideoStop
- 【触发时机】视频暂停时

#### 视频结束（On Video End）
- 【事件 ID】onVideoEnd
- 【触发时机】视频结束时

### 可用变量说明 [Demo](http://47.96.99.14:5301/#115)
#### CURR_TIME
- 【类型】number
- 【说明】当前播放时间（秒）
- 【示例】10

#### DURATION
- 【类型】number
- 【说明】视频总时间（秒）
- 【示例】47

#### SRC
- 【类型】string
- 【说明】视频来源
- 【示例】'https://enhancer.io/video/1.mp4'



### 其它
- [Enhancer 教程](https://enhancer.io/tutorials)
- [Enhancer 社区](https://forum.enhancer.io/#p=1&t=5)