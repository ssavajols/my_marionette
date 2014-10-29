/**
 * Sample controller
 */
define('application/module/module_pixi/controller/controller',
    [
        "system/core/ma_controller",
        "application/module/module_pixi/view/pixi_view"
    ],
    function(MA_controller, PixiView){

    var controller = MA_controller.extend({

        index: function(){

            var view = new PixiView();

            this.channel.commands.execute("setView", view, 'content', true);

        }

    });

    return controller;


});