define('system/core/marionette.my.view',
    [
        'application/config/config'
    ],
    function(config){

    if( !Marionette[config.namespace] ){
        Marionette[config.namespace] = {};
    }

    Marionette[config.namespace].View = Marionette.View;

});