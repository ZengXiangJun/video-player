module.exports = {
  __lang__: 'en',
    title: 'Set video-player data',
    dataSpecification: 
`
Media type support： 
    - video/ogg 
    - video/mp4 
    - video/webm

Data format：JSON
    - src：src（necessary）
    - poster：poster（unnecessary）
    - watermark：watermark（unnecessary）
    - watermarkLink：watermarkLink（unnecessary）

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
    widgetConfig: 'Widget Config',
    width: 'Width',
    height: 'Height',
    poster: 'Poster',
    watermark: 'Watermark',
    autoplay: 'Autoplay',
    loop: 'Loop',
    mute: 'Mute',
    audioOnly: 'AudioOnly',

    onVideoReady: 'On Video Ready',
    onVideoPlay: 'On Video Play',
    onVideoPause: 'On Video Pause',
    onVideoEnd: 'On Video End',
    onVideoResize: 'On Video Resize',
    onVideoSeek: 'On Video Seek',
    onVideoTimeUpdate: 'On Video Time Update',
    onVideoVolumeUpdate: 'On Video Volume Update',

    SRC: 'SRC',
    DURATION: 'DURATION',
    CURR_TIME: 'CURR_TIME',
    VOLUME: 'VOLUME',
    POSTER: 'POSTER',
    WATERMARK: 'WATERMARK',
    WATERMARKLINK: 'WATERMARKLINK'
};