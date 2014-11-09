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

            initialize: function(){

                if (!window.isLiked) {
                    this.template = hbsTemplate["application/module/code_route/view/template/not_liked"];
                }


                Marionette.My.ItemView.prototype.initialize.apply(this, arguments);
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