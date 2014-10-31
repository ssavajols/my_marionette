/**
 * Sample view
 */
define('application/module/module_pixi/view/pixi_composite_view',
    [
        "system/core/ma_composite_view",
        "application/behavior/pixi",
        "application/module/module_pixi/view/pixi_item_view"
    ],
    function(MA_compositeView, BehaviorPixi, MA_pixiItemView){

        var PixiView = MA_compositeView.extend({
            template: $.noop,
            className: "container-canvas",
            behaviors: {
                pixi: {
                    behaviorClass: BehaviorPixi,
                    autoStart: false
                }
            },
            initialize: function(){
                new MA_pixiItemView();

//                setTimeout(_.bind(function(){
                    console.log(this);
                    this.triggerMethod('start');
//                }, this), 1000);
            },
            onMouseMove: function(event){
                this.channel.vent.trigger('module_pixi:mousemove', event);
            },
            onResize: function(){
                this.channel.vent.trigger('module_pixi:resize', event);
            },
            onUpdate: function(event){
                this.channel.vent.trigger('module_pixi:update', event);
            }

        });

        return PixiView;

    });