require('./index.less');
var locale = require('./i18n');
var tpl = require('./index.html');
var Clappr = require('./clappr.min.js');
Enhancer.registerWidget({
    construct: function(profile, zContext) {
        profile = $.extend({
            width: 100,
            height: 80,
            autoplay: false,
            loop: false,
            muted: false,
            fullScreen: true,
            speed: true
        }, profile);
        var $container = this.getContainer();
        this.$container = $container;
        this.profile = profile;
        this.affected();
        return $container;
    },
    onFrameReady: function(zContext) {},
    getData: function() {
        return {
            // CURR_TIME: this.CURR_TIME || 0,
            // DURATION: this.DURATION || 0,
            // SRC: this.SRC || ''
        };
    },
    isValid: function() {
        return true
    },
    affected: function(zContext, page) {
        var $container = this.$container;
        var profile = this.profile;
        var that = this;
        $container.html(tpl({
            locale: locale()
        })).addClass('video-player');
        that.trig('complete');

        var player = new Clappr.Player({
            parentId: "#player",
            source: "http://localhost:50000/video/ocean.mp4",
            poster: "http://localhost:50000/images/dongji.JPG",
            watermark: "http://localhost:50000/images/wuyuan.png", 
            position: 'top-right',
            watermarkLink: "https://yobook.cn",
            width: '100%',
            height: '100%',
            // autoPlay: true,
            loop: false,
            mute: false,
            preload: 'metadata',
            audioOnly: false,
            events: {
                onReady: function() {
                    console.log('onReady');
                },
                onResize: function() {
                    console.log('onResize');
                },
                onPlay: function() {
                    console.log('onPlay');
                },
                onPause: function() {
                    console.log('onPause');
                },
                onStop: function() {
                    console.log('onStop');
                },
                onEnded: function() {
                    console.log('onEnded');
                },
                onSeek: function() {
                    console.log('onSeek');
                },
                onError: function() {
                    console.log('onError');
                },
                onTimeUpdate: function() {
                    console.log('onTimeUpdate');
                    console.log(this.getDuration())
                    console.log(this.getCurrentTime())
                },
                onVolumeUpdate: function() {
                    console.log('onVolumeUpdate');
                }
            }


            // closedCaptionsConfig: {
            //     title: 'Subtitles', 
            //     default is none
            //     ariaLabel: 'Closed Captions', 
            //     Default is 'cc-button'
            //     labelCallback: function (track) { 
            //         return track.name 
            //     } 
            //     track is an object with id, name and track properties (track is TextTrack object)
            // },
            // actualLiveServerTime: "2015/11/26 06:01:03",
            // mimeType: "mimetype-for-media"
            // chromeless: true,
            // allowUserInteraction: true
        });


        // console.log(Clappr);

    }
});



        // $container.html('');
        // this.getSourceData(profile.srcId, {}, function(data){
        //     if (!data){
        //         data = '';
        //     }
        //     if (data.rows){
        //         if (data.rows[0] && data.rows[0].video) {
        //             data = data.rows[0].video;
        //         } else {
        //             data = '';
        //         }
        //     };
        //     that.SRC = data;
        //     $container.html(tpl({
        //         locale: locale(),
        //         src: data, 
        //         width: profile.width,
        //         height: profile.height,
        //         fullScreen: profile.fullScreen,
        //         speed: profile.speed
        //     })).addClass('video-player');
        //     that.trig('complete');
        //     var $video = $container.find('video');
        //     var video = $video[0];
        //     video.autoplay = profile.autoplay;
        //     video.loop = profile.loop;
        //     video.muted = profile.muted;
        //     //可播放时事件
        //     var isReady = false;

        //     $video.on('canplay', function() {
        //         $container.find('#wait').css('display', 'none');
        //         if (video.autoplay) {
        //             $container.find('.play').attr('class', 'fas fa-pause');
        //         }
        //         isReady = true;
        //         that.trig('onVideoReady');
        //     })
        //     //播放
        //     $container.on('click', '.videoWrap', function() {
        //         if (video.paused) {
        //             video.play();
        //             $container.find('.play').attr('class', 'fas fa-pause');
        //         } else {
        //             video.pause();
        //             $container.find('.play').attr('class', 'fab fa-youtube');
        //         }
        //     })
        //     //移出移入显示
        //     var show_t;
        //     function show() {
        //         if (!isReady) {
        //             return
        //         }
        //         $container.find('.tool').show(100);
        //         $container.find('.play').show(100);
        //         show_t = setTimeout(function() {
        //             $container.find('.tool').hide(100);

        //             $container.find('.play').hide(100);
        //             $container.find('.speedSelect').hide();
        //         }, 4000)
        //     }
        //     $container.on('mouseenter', '.outerWrap', function() {
        //         show();
        //     })
        //     $container.on('mousemove', '.outerWrap', function() {
        //         clearTimeout(show_t);
        //         show();
        //     })
        //     $container.on('mouseleave', '.outerWrap', function() {
        //         if (!isReady) {
        //             return
        //         }
        //         $container.find('.tool').hide(100);
        //         $container.find('.play').hide(100);
        //         $container.find('.speedSelect').hide();
        //     })
        //     //播放
        //     $video.on('loadedmetadata', function() {
        //         that.DURATION = video.duration;
        //        $container.find('#duration').text(formatSeconds(video.duration));
        //     });
        //     $video.on('timeupdate', function() {
        //         that.CURR_TIME = video.currentTime;
        //        $container.find('#current').text(formatSeconds(video.currentTime));
        //        var currentPos = video.currentTime;
        //        var maxduration = video.duration;
        //        var percentage = 100 * currentPos / maxduration;
        //        $container.find('#timeBar').css('width', percentage+'%');
        //     });
        //     var timeDrag = false;
        //     $container.find('.process').mousedown(function(e) {
        //        timeDrag = true;
        //        updatebar(e.pageX);
        //     });
        //     var updatebar = function(x) {
        //        var progress = $container.find('.process');
        //        var maxduration = video.duration;
        //        var position = x - progress.offset().left;
        //        var percentage = 100 * position / progress.width();
        //        if(percentage > 100) {
        //           percentage = 100;
        //        }
        //        if(percentage < 0) {
        //           percentage = 0;
        //        }
        //        $container.find('#timeBar').css('width', percentage+'%');
        //        video.currentTime = maxduration * percentage / 100;
        //     };
        //     //全屏显示
        //     $container.on('click', '#fullScreen', function() {
        //         if ($(this).attr('fullscreen') === 'true') {
        //             exitFullscreen();
        //             $(this).attr('fullscreen', 'false');
        //         } else {
        //             fullscreen();
        //             $(this).attr('fullscreen', 'true');
        //         }
        //     })
        //     //控制音量
        //     if (video.muted) {
        //         $container.find('#volumeIcon').attr('class', 'fas fa-microphone-slash');
        //     }
        //     $container.find('#volumeIcon').click(function() {
        //        video.muted = !video.muted;
        //         if (video.muted) {
        //             $(this).attr('class', 'fas fa-microphone-slash');
        //         } else {
        //             $(this).attr('class', 'fas fa-volume-up');
        //         }
        //        return false;
        //     });
        //     $container.find('#volume').css('width', video.volume*100+'%');
        //     $container.find('#volumeBar').on('mousedown', function(e) {
        //        var position = e.pageX - $(this).offset().left;
        //        var percentage = 100 * position / $(this).width();
        //        $container.find('#volume').css('width', percentage+'%');
        //        video.volume = percentage / 100;
        //     });
        //     //调整倍率
        //     $container.find('#speed').click(function() {
        //         $container.find('.speedSelect').show();
        //     })
        //     $container.find('.speedSelect div').click(function() {
        //         var id = $(this).attr('id');
        //         var speed = {
        //             speed_1: 2,
        //             speed_2: 1.5,
        //             speed_3: 1,
        //             speed_4: 0.75,
        //             speed_5: 0.5
        //         }
        //         video.playbackRate = speed[id];
        //         $container.find('.speedSelect').hide();
        //         return false;
        //     })
        //     $video.on('play', function() {
        //         that.trig('onVideoStart');
        //     })
        //     $video.on('pause', function() {
        //         that.trig('onVideoStop');
        //     })
        //     $video.on('ended', function() {
        //         that.trig('onVideoEnd');
        //     })
        //     var fullscreen=function(){  
        //         var elem = $container.find('.outerWrap')[0];
        //         if(elem.webkitRequestFullScreen){  
        //             elem.webkitRequestFullScreen();     
        //         }else if(elem.mozRequestFullScreen){  
        //             elem.mozRequestFullScreen();  
        //         }else if(elem.requestFullScreen){  
        //             elem.requestFullscreen();  
        //         }  
        //     }
        //     var exitFullscreen=function(){  
        //         var elem = $container.find('.outerWrap')[0];
        //         if(elem.webkitCancelFullScreen){ 
        //             elem.webkitCancelFullScreen(); 
        //         }else if(elem.mozCancelFullScreen){  
        //             elem.mozCancelFullScreen();
        //         }else if(elem.cancelFullScreen){  
        //             elem.cancelFullScreen();
        //         }else if(elem.exitFullscreen){  
        //             elem.exitFullscreen();
        //         }
        //     }
        //     function formatSeconds(seconds) {  
        //         if (seconds > 0) {
        //             var hours = Math.floor(seconds/3600);
        //             var minutes = Math.floor((seconds - hours*3600)/60);
        //             seconds = Math.floor(seconds - hours*3600 - minutes*60);
        //             hours = hours + '';
        //             if (hours.length < 2) {
        //                 hours = 0 + hours;
        //             }
        //             minutes = minutes + '';
        //             if (minutes.length < 2) {
        //                 minutes = 0 + minutes;
        //             }
        //             seconds = seconds + '';
        //             if (seconds.length < 2) {
        //                 seconds = 0 + seconds;
        //             }
        //             return hours + ':' + minutes + ':' + seconds;
        //         }   
        //     }
        // })