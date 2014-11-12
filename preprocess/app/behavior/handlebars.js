/**
 *
 */
define('system/behavior/handlebars',
    [
        "application/config/config"
    ],
    function(config){

        var Behavior = Marionette[config.namespace].Behavior.extend({

            initialize: function(){
                if( typeof this.view.template === "string"){
                    this.view.template = hbsTemplate[this.view.template];
                }
            }

        });

        return Behavior;
    });