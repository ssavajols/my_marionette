define('module/code_route/view/start_view',
    [
        'behavior/handlebars'
    ],
    function(BehaviorHandlebars){

        var StartView = Marionette.ItemView.extend({
            template:"module/code_route/view/template/intro",

            className: "introduction",

            ui: {
                start: ".start"
            },

            events: {
                "click @ui.start": "startBtn"
            },

            initialize: function(){

                if (!window.isLiked) {
                    this.template = hbsTemplate["module/code_route/view/template/not_liked"];
                }


                Marionette.ItemView.prototype.initialize.apply(this, arguments);
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