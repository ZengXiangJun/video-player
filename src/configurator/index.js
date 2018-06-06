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
            height: 80,
            autoplay: false,
            loop: false,
            muted: false,
            fullScreen: true,
            speed: true
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
        $('#autoplay').prop('checked', profile.autoplay);
        $('#loop').prop('checked', profile.loop);
        $('#muted').prop('checked', profile.muted);
        $('#fullScreen').prop('checked', profile.fullScreen);
        $('#speed').prop('checked', profile.speed);
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
                autoplay: $('#autoplay').prop('checked'),
                loop: $('#loop').prop('checked'),
                muted: $('#muted').prop('checked'),
                fullScreen: $('#fullScreen').prop('checked'),
                speed: $('#speed').prop('checked')
            }
        }
    },
    getSupportedEventList: function(profile) {
        var data = [{
            'id': 'onVideoReady',
            'name': locale('onVideoReady'),
            'des': "Triggered when video ready"
        }, {
            'id': 'onVideoStart',
            'name': locale('onVideoStart'),
            'des': "Triggered when video start"
        }, {
            'id': 'onVideoStop',
            'name': locale('onVideoStop'),
            'des': "Triggered when video stop"
        }, {
            'id': 'onVideoEnd',
            'name': locale('onVideoEnd'),
            'des': "Triggered when video end"
        }]
        return data;
    },
    getSupportedVariableList: function(profile) {
        return [{
            name: 'CURR_TIME',
            type: 'number',
            des: locale('CURR_TIME')
        }, {
            name: 'DURATION',
            type: 'number',
            des: locale('DURATION')
        }, {
            name: 'SRC',
            type: 'string',
            des: locale('SRC')
        }]
    },
    getDependentVariableList: function(profile) {
        return [];
    }
};
Enhancer.registerWidgetConfigurator(configurator);