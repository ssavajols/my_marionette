define('system/static/marionette.my.message_bus.global',
    [
        'application/config/config'
    ],
    function(config){


    if( !Backbone.Marionette.My ){
        Backbone.Marionette.My = {};
    }

    var channelName = config.globalChannelName || 'global';

    Backbone.Marionette.My.messageBus = {}
    Backbone.Marionette.My.messageBus[channelName] = Backbone.Wreqr.radio.channel(channelName);

});