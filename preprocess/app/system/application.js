/**
 * Global application object
 */
define('system/application',
    [
        "application/config/config",

        // Framework load classes
        "system/core/marionette.my.app_router",
        "system/core/marionette.my.application",
        "system/core/marionette.my.behavior",
        "system/core/marionette.my.behaviors",
        "system/core/marionette.my.callbacks",
        "system/core/marionette.my.collection_view",
        "system/core/marionette.my.composite_view",
        "system/core/marionette.my.controller",
        "system/core/marionette.my.item_view",
        "system/core/marionette.my.layout_view",
        "system/core/marionette.my.module",
        "system/core/marionette.my.object",
        "system/core/marionette.my.region",
        "system/core/marionette.my.region_manager",
        "system/core/marionette.my.renderer",
        "system/core/marionette.my.sub_router",
        "system/core/marionette.my.template_cache",
        "system/core/marionette.my.view"
    ],
    function(config){
        return new Marionette[config.namespace].Application({ channelName: config.globalChannelName });
    });