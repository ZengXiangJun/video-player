module.exports = {
  __lang__: 'zh-cn',
  title: '设置 video-player 数据',
  dataSpecification: `数据格式说明：
视频来源的格式只能是 video/ogg video/mp4 video/webm
1. 'https://enhancer.io/video/1.mp4'  【必须】url字符串
2.  {
      "rows": [{"video": "https://enhancer.io/video/1.mp4"}]
    }`,
  widgetConfig: '组件配置',
  width: '视频宽度',
  height: '视频高度',
  autoplay: '自动播放',
  loop: '循环播放',
  muted: '静音播放',
  fullScreen: '全屏按钮',
  speed: '速率按钮',
  onVideoReady: '视频载入时',
  onVideoStart: '视频开始播放时',
  onVideoStop: '视频停止播放时',
  onVideoEnd: '视频结束时',
  CURR_TIME: '当前播放时刻',
  DURATION: '视频总时长',
  SRC: '视频来源'
};