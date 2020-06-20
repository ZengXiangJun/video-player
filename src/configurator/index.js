require('./index.less');
var locale = require('./i18n');
var template = require('./index.html');
var configurator = {
    constructor: function() {
        var tplHTML = template({
            locale: locale()
        });
        $('body').html(tplHTML);

        $('#width,#height').blur(function() {
            var width = parseInt($('#width').val());
            var height = parseInt($('#height').val());
            if (width < 10) {
                $('#width').val(10)
            } else if (width > 100) {
                $('#width').val(100)
            }
            if (height < 10) {
                $('#height').val(10)
            } else if (height > 100) {
                $('#height').val(100)
            }
        })

    },
    setProfile: function(profile) {
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

        var title = locale('title');
        var dataSpecification = locale('dataSpecification');
        if (profile.srcId) {
            $('#dataWrap').attr('srcId', profile.srcId);
        }
        Enhancer.DatasourceManager.createConfigurator('dataWrap',{
            title: title,
            dataSpecification: dataSpecification,
            sourceId: profile.srcId,
            onSave : function(src){
                $('#dataWrap').attr('srcId', src.id);
            }
        });
        $('#width').val(profile.width);
        $('#height').val(profile.height);
        $('#poster').prop('checked', profile.poster);
        $('#watermark').prop('checked', profile.watermark);
        $('#autoplay').prop('checked', profile.autoplay);
        $('#loop').prop('checked', profile.loop);
        $('#mute').prop('checked', profile.mute);
        $('#audioOnly').prop('checked', profile.audioOnly);
    },
    getProfile: function() {
        var srcId = $('#dataWrap').attr('srcId');
        if (!srcId) {
            alert('请设置数据源');
        } else {
            return {
                srcId: $('#dataWrap').attr('srcId'),
                width: parseInt($('#width').val()),
                height: parseInt($('#height').val()),
                poster: $('#poster').prop('checked'),
                watermark: $('#watermark').prop('checked'),
                autoplay: $('#autoplay').prop('checked'),
                loop: $('#loop').prop('checked'),
                mute: $('#mute').prop('checked'),
                audioOnly: $('#audioOnly').prop('checked'),
            }
        }
    },
    getSupportedEventList: function(profile) {
        var data = [{
            'id': 'onVideoReady',
            'name': locale('onVideoReady'),
            'des': "Triggered when video ready"
        }, {
            'id': 'onVideoPlay',
            'name': locale('onVideoPlay'),
            'des': "Triggered when video play"
        }, {
            'id': 'onVideoPause',
            'name': locale('onVideoPause'),
            'des': "Triggered when video Pause"
        }, {
            'id': 'onVideoEnd',
            'name': locale('onVideoEnd'),
            'des': "Triggered when video end"
        }, {
            'id': 'onVideoResize',
            'name': locale('onVideoResize'),
            'des': "Triggered when video Resize"
        }, {
            'id': 'onVideoSeek',
            'name': locale('onVideoSeek'),
            'des': "Triggered when video Seek"
        }, {
            'id': 'onVideoTimeUpdate',
            'name': locale('onVideoTimeUpdate'),
            'des': "Triggered when video time update"
        }, {
            'id': 'onVideoVolumeUpdate',
            'name': locale('onVideoVolumeUpdate'),
            'des': "Triggered when video volume update"
        }]
        return data;
    },
    getSupportedVariableList: function(profile) {
        return [{
            name: 'SRC',
            type: 'string',
            des: locale('SRC')
        }, {
            name: 'DURATION',
            type: 'number',
            des: locale('DURATION')
        }, {
            name: 'CURR_TIME',
            type: 'number',
            des: locale('CURR_TIME')
        }, {
            name: 'VOLUME',
            type: 'number',
            des: locale('VOLUME')
        }, {
            name: 'POSTER',
            type: 'string',
            des: locale('POSTER')
        }, {
            name: 'WATERMARK',
            type: 'string',
            des: locale('WATERMARK')
        }, {
            name: 'WATERMARKLINK',
            type: 'string',
            des: locale('WATERMARKLINK')
        }]
    },
    getDependentVariableList: function(profile) {
        return [];
    }
};
Enhancer.registerWidgetConfigurator(configurator);