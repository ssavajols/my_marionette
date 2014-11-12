/**
 *
 */
define('behavior/resize',
    [
        "config/config"
    ],
    function(config){

        var Behavior = Marionette[config.namespace].Behavior.extend({

            initialize: function(){
                Marionette[config.namespace].messageBus[config.globalChannelName].vent.on('custom:resize', _.bind(this.onResize, this));
            },

            onResize: function(event){
                this.triggerViewMethod('resize', event);
            }


        });

        return Behavior;
    });