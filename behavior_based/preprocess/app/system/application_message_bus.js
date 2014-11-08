define('system/application_message_bus',
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