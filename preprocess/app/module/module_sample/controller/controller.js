/**
 * Sample controller
 */
define('application/module/module_sample/controller/controller',
    [
        "application/module/module_sample/view/sample_view"
    ],
    function(SampleView){

    var controller = Marionette.My.Controller.extend({

        index: function(){

            Marionette.My.messageBus.global.commands.execute("setView", new SampleView(), 'content', {transition: 'fade'});

        }

    });

    return controller;


});

