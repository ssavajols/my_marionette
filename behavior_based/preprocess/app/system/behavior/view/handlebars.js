/**
 *
 */
define('application/behavior/handlebars',
    function(){

        var Behavior = Backbone.Marionette.My.Behavior.extend({

            initialize: function(){
                if( typeof this.view.template === "string"){
                    this.view.template = hbsTemplate[this.view.template];
                }
            }

        });

        return Behavior;
    });