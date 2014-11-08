define('application/module/code_route/view/start_view',
    [
        'system/behavior/handlebars'
    ],
    function(BehaviorHandlebars){

        var StartView = Marionette.My.ItemView.extend({
            template:"application/module/code_route/view/template/intro",

            className: "introduction",

            ui: {
                start: ".start"
            },

            events: {
                "click @ui.start": "startBtn"
            },

            behaviors: {
                handlebars: {
                    behaviorClass: BehaviorHandlebars
                }
            },

            startBtn: function(){
              Marionette.My.messageBus.global.vent.trigger("btnStart");
            }
        });

        return StartView;

    });