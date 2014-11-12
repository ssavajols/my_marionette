define('core/marionette.my.behavior',
    [
        'config/config'
    ],
    function(config){

    if( !Marionette[config.namespace] ){
        Marionette[config.namespace] = {};
    }

    Marionette[config.namespace].Behavior = Marionette.Behavior.extend({

        triggerViewMethod: function(method, args){

            var methodName = "on" + method.charAt(0).toUpperCase() + method.slice(1);

            if( this.view && this.view[methodName]){
                this.view[methodName].call(this.view, args);
            }
        }

    });

});