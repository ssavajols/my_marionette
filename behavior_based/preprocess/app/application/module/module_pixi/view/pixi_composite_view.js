/**
 * Sample view
 */
define('application/module/module_pixi/view/pixi_composite_view',
    [
        "application/behavior/pixi",
        "application/module/module_pixi/view/pixi_item_view"
    ],
    function(BehaviorPixi, PixiItemView){

        var PixiView = Backbone.Marionette.My.CompositeView.extend({
            template: $.noop,
            className: "container-canvas",
            behaviors: {
                pixi: {
                    behaviorClass: BehaviorPixi
                }
            },
            initialize: function(){
                new PixiItemView();
            },
            onMousemove: function(event){
                Backbone.Marionette.My.messageBus.global.vent.trigger('module_pixi:mousemove', event);
            },
            onResize: function(event){
                Backbone.Marionette.My.messageBus.global.vent.trigger('module_pixi:resize', event);
            },
            onUpdate: function(){
                Backbone.Marionette.My.messageBus.global.vent.trigger('module_pixi:update');
            }

        });

        return PixiView;

    });