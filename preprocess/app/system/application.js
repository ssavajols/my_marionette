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

        // SET APPLICATION BASE URL IF NOT DEFINED IN CONFIG FILE
        // OVERRIDE CONFIG OPTIONS WITH META TAGS
        var baseHREF = "";
        var metaPrefix = 'app.config.';

        _.each(document.getElementsByTagName('meta'), function(meta){
            var c;

            if( meta.name.indexOf(metaPrefix) !== -1 ) {

                if( !isNaN(meta.content) ){
                    c = Number(meta.content);
                }else if( meta.content.toLowerCase() === "true"  ){
                    c = true;
                }else if( meta.content.toLowerCase() === "false" ){
                    c = false;
                }else{
                    c = meta.content;
                }

                config[meta.name.replace(metaPrefix, '')] = c;
            }
        });

        if( 'baseURI' in document ){
            baseHREF = document.baseURI;
        }else if( document.getElementsByTagName('base').length ){
            baseHREF = document.getElementsByTagName('base')[0].href;
        }

        if(!config.base_url && baseHREF){
            config.base_url = baseHREF.replace(new RegExp('http(s)?://'+window.location.hostname), '');
        }

        return new Marionette[config.namespace].Application({ channelName: config.globalChannelName });
    });