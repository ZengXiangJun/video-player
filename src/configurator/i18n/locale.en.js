module.exports = {
  __lang__: 'en',
  title: 'Set data of video-player',
  dataSpecification: `Data format：
Video src format only can be video/ogg video/mp4 video/webm
1. 'https://enhancer.io/video/1.mp4'  【necessary】url string
2.  {
      "rows": [{"video": "https://enhancer.io/video/1.mp4"}]
    }`,  widgetConfig: 'Widget Config',
  width: 'Width',
  height: 'Height',
  autoplay: 'Auto Play',
  loop: 'Loop',
  muted: 'Muted',
  fullScreen: 'Full Screen',
  speed: 'Speed',
  onVideoReady: 'On Video Ready',
  onVideoStart: 'On Video Start',
  onVideoStop: 'On Video Stop',
  onVideoEnd: 'On Video End',
  CURR_TIME: 'CURR_TIME',
  DURATION: 'DURATION',
  SRC: 'SRC'
};