/**
 *
 */
define('behavior/handlebars',
    [
        "config/config"
    ],
    function(config){

        var Behavior = Marionette.Behavior.extend({

            initialize: function(){
                if( typeof this.view.template === "string"){
                    this.view.template = hbsTemplate[this.view.template];
                }
            }

        });

        return Behavior;
    });