define('system/core/marionette.my.app_router',
    [
        'application/config/config'
    ],
    function(config){

    if( !Marionette[config.namespace] ){
        Marionette[config.namespace] = {};
    }

    Marionette[config.namespace].AppRouter = Marionette.AppRouter;

});