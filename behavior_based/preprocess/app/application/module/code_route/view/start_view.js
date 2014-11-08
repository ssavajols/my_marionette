define('application/module/code_route/view/start_view',
    [
    ],
    function(){

        var StartView = Marionette.My.ItemView.extend({
            template:"#intro",

            ui: {
                start: ".start"
            },

            events: {
                "click @ui.start": "startBtn"
            },

            startBtn: function(){
              Marionette.My.messageBus.global.vent.trigger("btnStart");
            }
        });

        return StartView;

    });