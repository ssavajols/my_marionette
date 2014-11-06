/**
 * Global application object
 */
define('system/application',
    [
        "application/config/config"
    ],
    function(config){
        return new Backbone.Marionette.Application({ channelName: config.globalChannelName || 'global' });
    });