define('application/module/code_route/view/start_view',
    [
    ],
    function(MouseMove){

        var StartView = Backbone.Marionette.My.ItemView.extend({
            template:"#intro",

            ui: {
                start: ".start"
            },

            events: {
                "click @ui.start": "startBtn"
            },

            initialize: function(){

                // OVERRIDE BASE VIEW METHODS
//                MY_itemView.prototype.initialize.apply(this, arguments);
            },

            startBtn: function(){
              this.channel.vent.trigger("btnStart");
            }
        });

        return StartView;

    });