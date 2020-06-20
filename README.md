## Enhancer 三方组件 video-player 使用说明

### 简介
video-player 是基于 [无远平台][1]、[Clappr][2] 封装的 HTML5 视频播放组件。[DEMO][3]。

组件版本 `0.0.10` 及以下的文档见 `0.0.1` 分支。

### 数据源设置
支持如下媒体类型播放：
- video/ogg
- video/mp4
- video/webm

数据源：
- `src`：视频链接（必须）
- `poster`：封面图片链接（非必须）
- `watermark`：水印图片链接（非必须）
- `watermarkLink`：水印链接（非必须）

```
{
	"src": "http://host/ocean.mp4", 
	"poster": "http://host/poster.png", 
	"watermark": "http://host/watermark.png",
	"watermarkLink": "http://host"
}

{
	"rows": [{
		"src": "http://host/ocean.mp4",
		"poster": "http://host/poster.png",
		"watermark": "http://host/watermark.png",
		"watermarkLink": "http://host"
	}]
}
```

### 可用事件说明
#### 视频载入（on Video Ready）
- 【事件 ID】onVideoReady
- 【触发时机】视频载入时

#### 视频播放（On Video Play）
- 【事件 ID】onVideoPlay
- 【触发时机】视频播放时

#### 视频暂停（On Video Pause）
- 【事件 ID】onVideoPause
- 【触发时机】视频暂停时

#### 视频结束（On Video End）
- 【事件 ID】onVideoEnd
- 【触发时机】视频结束时

#### 调整播放器尺寸（On Video Resize）
- 【事件 ID】onVideoResize
- 【触发时机】调整播放器窗口尺寸时

#### 调整播放时间（On Video Seek）
- 【事件 ID】onVideoSeek
- 【触发时机】调整播放时间时

#### 播放时间变化（On Video Time Update）
- 【事件 ID】onVideoTimeUpdate
- 【触发时机】当前播放时间变化时

#### 调整播放音量（On Video Time Volume Update）
- 【事件 ID】onVideoVolumeUpdate
- 【触发时机】调整播放音量时

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

#### VOLUME
- 【类型】number
- 【说明】音量
- 【示例】50

#### POSTER
- 【类型】string
- 【说明】封面图片链接
- 【示例】`http://host/poster.png`

#### WATERMARK
- 【类型】string
- 【说明】水印图片链接
- 【示例】`http://host/watermark.png`

#### WATERMARKLINK
- 【类型】string
- 【说明】水印链接
- 【示例】`http://host/watermarkLink`

[1]: https://wuyuan.io/
[2]: https://github.com/clappr/clappr
[3]: https://workbench.wuyuan.io/proj/17942#120