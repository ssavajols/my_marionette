/**
 * Sample controller
 */
define('application/module/module_sample/controller/controller',
    [
        "application/module/module_sample/view/sample_view"
    ],
    function(SampleView){

    var controller = Backbone.Marionette.Controller.extend({

        index: function(){

            Backbone.Marionette.My.messageBus.global.commands.execute("setView", new SampleView(), 'content', true);

        }

    });

    return controller;


});

