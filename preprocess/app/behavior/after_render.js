/**
 *
 */
define('system/behavior/after_render',
    [
        "application/config/config"
    ],
    function(config){

        var Behavior = Marionette[config.namespace].Behavior.extend({

            onRender: function(){
                _.defer(_.bind(function(){
                        this.triggerViewMethod('afterRender');
                },this));
            }


        });

        return Behavior;
    });