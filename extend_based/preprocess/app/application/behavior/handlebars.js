/**
 *
 */
define('application/behavior/handlebars',
    [
        "system/core/ma_behavior"
    ],
    function(MA_behavior){

        var Behavior = MA_behavior.extend({

            initialize: function(){
                if( typeof this.view.template === "string"){
                    this.view.template = hbsTemplate[this.view.template];
                }
            }

        });

        return Behavior;
    });