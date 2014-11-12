define('core/marionette.my.message_bus',
    [
        'config/config'
    ],
    function(config){

    if( !Marionette[config.namespace] ){
        Marionette[config.namespace] = {};
    }

    Backbone.Marionette[config.namespace].messageBus = {};
    Backbone.Marionette[config.namespace].messageBus[config.globalChannelName] = Backbone.Wreqr.radio.channel(config.globalChannelName);

    return Backbone.Marionette[config.namespace].messageBus[config.globalChannelName];
});