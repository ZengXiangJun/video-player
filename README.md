## Enhancer 三方组件 video-player 使用说明
### 简介
video-player 是基于 [无远平台][1]、[clappr][2] 封装的 HTML5 视频播放组件。

### 数据源设置
支持如下媒体类型播放：
- video/ogg
- video/mp4
- video/webm

数据源：
```
"https://enhancer.io/video/1.mp4"

{
	"rows": [{
		"video": "https://enhancer.io/video/1.mp4"
	}]
}
```

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

### 可用变量说明
#### SRC
- 【类型】string
- 【说明】视频来源

#### DURATION
- 【类型】number
- 【说明】视频总时间（秒）
- 【示例】47

#### CURR_TIME
- 【类型】number
- 【说明】当前播放时间（秒）
- 【示例】10


[1]: https://wuyuan.io/
[2]: https://github.com/clappr/clappr