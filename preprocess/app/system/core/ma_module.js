/**
 * Core module class
 */
define('system/core/ma_module',
    [
        "application/config/config"
    ],
    function(config){

    var Module = Backbone.Marionette.Module.extend({

        channel: Backbone.Wreqr.radio.channel(config.globalChannelName || 'global')

    });

    return Module;
});