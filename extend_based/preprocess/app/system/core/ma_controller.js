/**
 * Core controller class
 */
define('system/core/ma_controller',
    [
        "application/config/config"
    ],
    function(config){

    var Controller = Backbone.Marionette.Controller.extend({
        channel: Backbone.Wreqr.radio.channel(config.globalChannelName || 'global')
    });

    return Controller;
});