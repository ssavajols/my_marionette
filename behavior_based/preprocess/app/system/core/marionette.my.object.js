define('system/core/marionette.my.object',
    [
        'application/config/config'
    ],
    function(config){

    if( !Marionette[config.namespace] ){
        Marionette[config.namespace] = {};
    }

    Marionette[config.namespace].Object = Marionette.Object;

});