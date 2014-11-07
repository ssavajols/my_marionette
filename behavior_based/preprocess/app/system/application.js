/**
 * Global application object
 */
define('system/application',
    [
        "application/config/config",

        // Static objects
        "system/static/marionette.my.message_bus.global",

        // Framework load classes
        "system/core/marionette.my.behavior",
        "system/core/marionette.my.region",
        "system/core/marionette.my.layout_view",
        "system/core/marionette.my.composite_view",
        "system/core/marionette.my.collection_view",
        "system/core/marionette.my.item_view"
    ],
    function(config){
        return new Backbone.Marionette.Application({ channelName: config.globalChannelName || 'global' });
    });