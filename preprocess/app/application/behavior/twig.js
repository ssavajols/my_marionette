/**
 *
 */
define('application/behavior/twig',
    [
        "system/core/ma_behavior"
    ],
    function(MA_behavior){

        var Behavior = MA_behavior.extend({

            initialize: function(){
                if( typeof this.view.template === "string"){
                    this.view.template = Templates[this.view.template];
                }
                this.view.render = _.bind(this.render, this);
            },

            render: function(){
                this.view.$el.html(this.view.template.render(this.view.serializeData()));
            }
        });

        return Behavior;
    });