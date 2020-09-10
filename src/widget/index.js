require('./index.less');
var locale = require('./i18n');
var tpl = require('./index.html');
var Clappr = require('clappr');
// var Clappr = require('./clappr.min.js');
Enhancer.registerWidget({
    construct: function(profile, zContext) {
        profile = $.extend({
            width: 100,
            height: 100,
            poster: false,
            watermark: false,
            autoplay: false,
            loop: false,
            mute: false,
            audioOnly: false
        }, profile);

        var $container = this.getContainer();
        this.$container = $container;
        this.profile = profile;
        this.affected();
        return $container;
    },
    onFrameReady: function(zContext) {},
    isValid: function() {
        return true
    },
    getData: function() {
        var data = {
            SRC: this.SRC || '',
            DURATION: this.DURATION || 0,
            CURR_TIME: this.CURR_TIME || 0,
            VOLUME: this.VOLUME || 0,
            POSTER: this.POSTER || '',
            WATERMARK: this.WATERMARK || '',
            WATERMARKLINK: this.WATERMARKLINK || '' 
        }
        return data;
    },
    affected: function(zContext, page) {
        var $container = this.$container;
        var profile = this.profile;
        var that = this;

        $container.html(tpl({
            locale: locale()
        })).addClass('video-player');

        $container.find('#player').css({
            width: profile.width + '%',
            height: profile.height + '%'
        })

        this.getSourceData(profile.srcId, {}, function(data) {
            if (!data){
                data = {};
            }
            if (data.rows){
                if (data.rows[0]) {
                    data = data.rows[0];
                } else {
                    data = {};
                }
            };
            if (typeof data === 'string') {
                data = JSON.parse(data);
            }

            that.SRC = data.src || '';
            that.POSTER = data.poster || '';
            that.WATERMARK = data.watermark || '';
            that.WATERMARKLINK = data.watermarkLink || '';

            var config = {
                parentId: "#player",
                preload: 'metadata',
                width: '100%',
                height: '100%',
                position: 'top-right',
                source: data.src,
                poster: profile.poster ? data.poster : '',
                watermark: profile.watermark ? data.watermark : '', 
                watermarkLink: profile.watermark ? data.watermarkLink : '',
                autoPlay: profile.autoplay,
                loop: profile.loop,
                mute: profile.mute,
                audioOnly: profile.audioOnly,
                playback: {
                    preload: 'metadata',
                    // controls: true,
                    playInline: true,
                    // crossOrigin: 'use-credentials',
                    recycleVideo: Clappr.Browser.isMobile,
                    triggerFatalErrorOnResourceDenied: true,
                    hlsUseNextLevel: true,
                    hlsjsConfig: {
                        maxMaxBufferLength: 4
                    }
                },
                events: {
                    onReady: function() {
                        that.DURATION = this.getDuration();
                        that.CURR_TIME = this.getCurrentTime();
                        that.VOLUME = this.getVolume();
                        that.trig('onVideoReady');
                    },
                    onPlay: function() {
                        that.DURATION = this.getDuration();
                        that.CURR_TIME = this.getCurrentTime();
                        that.trig('onVideoPlay');
                    },
                    onPause: function() {
                        that.CURR_TIME = this.getCurrentTime();
                        that.trig('onVideoPause');
                    },
                    onEnded: function() {
                        that.CURR_TIME = this.getCurrentTime();
                        that.trig('onVideoEnd');
                    },
                    onResize: function() {
                        that.trig('onVideoResize');
                    },
                    onSeek: function() {
                        that.CURR_TIME = this.getCurrentTime();
                        that.trig('onVideoSeek');
                    },
                    onTimeUpdate: function() {
                        that.CURR_TIME = this.getCurrentTime();
                        that.trig('onVideoTimeUpdate');
                    },
                    onVolumeUpdate: function() {
                        that.VOLUME = this.getVolume();
                        that.trig('onVideoVolumeUpdate');
                    },
                    onStop: function() {
                    },
                    onError: function() {
                    }
                }
            };

            var player = new Clappr.Player(config);

            that.trig('complete');
        })

    }
});