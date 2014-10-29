define('application/module/module_sample/controller/controller',
    [
        "application/module/module_sample/view/sample_view"
    ],
    function(SampleView){

    var controller = Backbone.Marionette.Controller.extend({

        channel: Backbone.Wreqr.radio.channel('global'),

        index: function(){

            this.channel.commands.execute("setView", new SampleView(), 'modal', true);

        }

    });

    return controller;


});