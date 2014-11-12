/**
 * Sample controller
 */
define('bundles/module_sample/controller/controller',
    [
        "bundles/module_sample/view/sample_view"
    ],
    function(SampleView){

    var controller = Marionette.Controller.extend({

        index: function(){

            Marionette.My.messageBus.global.commands.execute("setView", new SampleView(), 'content', {transition: 'fade'});

        }

    });

    return controller;


});

