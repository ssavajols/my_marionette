/**
 * Sample controller
 */
define('application/module/module_pixi/controller/controller',
    [
        "application/module/module_pixi/view/pixi_composite_view"
    ],
    function(PixiCompositeView){

    var controller = Marionette.Controller.extend({

        index: function(){

            Marionette.My.messageBus.global.commands.execute("setView", new PixiCompositeView(), 'content', {transition:'fade'});

        },

        sample: function(){
            this.index.apply(this, arguments);
            console.log('controller/sample', arguments);
        }

    });

    return controller;


});