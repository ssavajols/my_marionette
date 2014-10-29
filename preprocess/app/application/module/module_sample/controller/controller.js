/**
 * Sample controller
 */
define('application/module/module_sample/controller/controller',
    [
        "system/core/ma_controller",
        "application/module/module_sample/view/sample_view"
    ],
    function(MA_controller, SampleView){

    var controller = MA_controller.extend({

        index: function(){

            this.channel.commands.execute("setView", new SampleView(), 'content', true);

        }

    });

    return controller;


});