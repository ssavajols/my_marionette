/**
 * Sample view
 */
define('application/component/sample/view/sample_layout',
    [
        "system/core/ma_layout",
        "application/behavior/handlebars",
        "application/helper/handlebars"
    ],
    function(MA_layout, Handlebars){

        var SampleView = MA_layout.extend({
            template: "application/component/sample/view/templates/templates",
            events:{
                "click .action": "clickMethod"
            },
            initialize: function(){

                this.model = new Backbone.Model();
                this.model.set('message', 'this is a message from backbone model');

                MA_layout.prototype.initialize.apply(this, arguments);
            },
            behaviors: {
               handlebars: {
                   behaviorClass: Handlebars
               }
            },
            className: "component-sample",
            regions: {
                header: ".header-component"
            },
            clickMethod: function(event){
                event.preventDefault();
                alert("clickMethod binded by Backbone.Events");
            }
        });

        return SampleView;

    });