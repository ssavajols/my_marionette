define('system/core/marionette.my.sub_router',
    [
        'application/config/config'
    ],
    function(config){

    if( !Marionette[config.namespace] ){
        Marionette[config.namespace] = {};
    }

    Marionette[config.namespace].SubRouter = Marionette.SubRouter;

});