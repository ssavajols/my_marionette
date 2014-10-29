/**
 * Sample controller
 */
define('application/module/module_pixi/controller/controller',
    [
        "system/core/ma_controller",
        "application/module/module_pixi/view/pixi_composite_view"
    ],
    function(MA_controller, PixiCompositeView){

    var controller = MA_controller.extend({

        index: function(){

            this.channel.commands.execute("setView", new PixiCompositeView(), 'content', true);

        },

        sample: function(){
            this.index.apply(this, arguments);
            console.log('controller/sample', arguments);
        }

    });

    return controller;


});