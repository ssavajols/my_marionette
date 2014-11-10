define('system/core/marionette.my.region_manager',
    [
        'application/config/config'
    ],
    function(config){

    if( !Marionette[config.namespace] ){
        Marionette[config.namespace] = {};
    }

    Marionette[config.namespace].RegionManager = Marionette.RegionManager;

});