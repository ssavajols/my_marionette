/**
 * Sample view
 */
define('application/module/module_pixi/view/pixi_composite_view',
    [
        "system/behavior/pixi",
        "application/module/module_pixi/view/pixi_item_view"
    ],
    function(BehaviorPixi, PixiItemView){

        var PixiView = Marionette.My.CompositeView.extend({
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
                Marionette.My.messageBus.global.vent.trigger('module_pixi:mousemove', event);
            },
            onResize: function(event){
                Marionette.My.messageBus.global.vent.trigger('module_pixi:resize', event);
            },
            onUpdate: function(){
                Marionette.My.messageBus.global.vent.trigger('module_pixi:update');
            }

        });

        return PixiView;

    });