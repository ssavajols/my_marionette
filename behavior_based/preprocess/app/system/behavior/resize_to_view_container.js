/**
 *
 */
define('system/behavior/resize_to_view_container',
    [
        "application/config/config"
    ],
    function(config){

        var Behavior = Marionette[config.namespace].Behavior.extend({

            onBeforeShow: function(){
                this.onResize();
            },

            onResize: function(){
                var height = $(window).height()-95-20;
                this.view.$el.height(height);
            }

        });

        return Behavior;
    });