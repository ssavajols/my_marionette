define('system/static/marionette.my.message_bus.global',
    [
        'application/config/config'
    ],
    function(config){


    if( !Marionette[config.namespace] ){
        Marionette[config.namespace] = {};
    }

    Backbone.Marionette[config.namespace].messageBus = {};
    Backbone.Marionette[config.namespace].messageBus[config.globalChannelName] = Backbone.Wreqr.radio.channel(config.globalChannelName);

});