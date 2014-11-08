define('system/core/marionette.my.application',
    [
        'application/config/config'
    ],
    function(config){

    if( !Marionette[config.namespace] ){
        Marionette[config.namespace] = {};
    }

    Marionette[config.namespace].Application = Marionette.Application;

});