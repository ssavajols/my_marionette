/**
 * Sample view
 */
define('application/module/module_pixi/view/pixi_composite_view',
    [
        "system/core/ma_composite_view",
        "application/behavior/pixi"
    ],
    function(MA_compositeView, BehaviorPixi){

        var PixiView = MA_compositeView.extend({
            template: $.noop,
            className: "container-canvas",
            behaviors: {
                pixi: {
                    behaviorClass: BehaviorPixi
                }
            },
            onMouseMove: function(event){
                console.log(event);
            },
            onResize: function(){
                console.log('view pixi resized');
            }

        });

        return PixiView;

    });