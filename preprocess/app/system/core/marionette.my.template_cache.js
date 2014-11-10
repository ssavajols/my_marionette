define('system/core/marionette.my.template_cache',
    [
        'application/config/config'
    ],
    function(config){

    if( !Marionette[config.namespace] ){
        Marionette[config.namespace] = {};
    }

    Marionette[config.namespace].TemplateCache = Marionette.TemplateCache;

});