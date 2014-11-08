/**
 * Sample view
 */
define('application/component/sample/view/sample_layout',
    [
        "system/behavior/twig"
    ],
    function(Twig){

        var SampleView = Marionette.My.LayoutView.extend({
            template: "subdir/tpl",
            events:{
                "click .action": "clickMethod"
            },
            initialize: function(){

                this.model = new Backbone.Model();
                this.model.set('message', 'this is a message from backbone model');

                Marionette.My.LayoutView.prototype.initialize.apply(this, arguments);
            },
            behaviors: {
               twig: {
                   behaviorClass: Twig
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