module.exports = {
    __lang__: 'zh-cn',
    title: '设置 video-player 数据',
    dataSpecification: 
`
视频媒体类型支持： 
    - video/ogg 
    - video/mp4 
    - video/webm

数据格式：JSON
    - src：视频链接（必须）
    - poster：封面图片链接（非必须）
    - watermark：水印图片链接（非必须）
    - watermarkLink：水印链接（非必须）

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
}`,
    widgetConfig: '组件配置',
    width: '视频宽度',
    height: '视频高度',
    poster: '启用封面',
    watermark: '启用水印',
    autoplay: '自动播放',
    loop: '循环播放',
    mute: '静音播放',
    audioOnly: '仅播音频',

    onVideoReady: '视频载入时',
    onVideoPlay: '视频播放时',
    onVideoPause: '视频暂停时',
    onVideoEnd: '视频结束时',
    onVideoResize: '调整播放器窗口尺寸时',
    onVideoSeek: '调整播放时间时',
    onVideoTimeUpdate: '当前播放时间变化时',
    onVideoVolumeUpdate: '调整播放音量时',

    SRC: '视频来源',
    DURATION: '视频总时间',
    CURR_TIME: '当前播放时间',
    VOLUME: '音量',
    POSTER: '封面图片链接',
    WATERMARK: '水印图片链接',
    WATERMARKLINK: '水印链接'
};