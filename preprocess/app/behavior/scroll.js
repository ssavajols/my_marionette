/**
 *
 */
define('behavior/scroll',
    [
        "config/config"
    ],
    function(config){

        var Behavior = Marionette[config.namespace].Behavior.extend({

            initialize: function(){
                Marionette[config.namespace].messageBus[config.globalChannelName].vent.on('custom:scroll', _.bind(this.onScroll, this));
            },

            onScroll: function(event){
                this.triggerViewMethod('scroll', event);
            }

        });

        return Behavior;
    });