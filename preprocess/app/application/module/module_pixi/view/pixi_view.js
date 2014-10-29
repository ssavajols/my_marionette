/**
 * Sample view
 */
define('application/module/module_pixi/view/pixi_view',
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
            }

        });

        return PixiView;

    });