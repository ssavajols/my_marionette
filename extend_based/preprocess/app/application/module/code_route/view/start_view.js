define('application/module/code_route/view/start_view',
    [
        "application/core/my_item_view",
        "application/behavior/mousemove"
    ],
    function(MY_itemView, MouseMove){

        var StartView = MY_itemView.extend({
            template:"#intro",

            ui: {
                start: ".start"
            },

            events: {
                "click @ui.start": "startBtn"
            },

            initialize: function(){

                // OVERRIDE BASE VIEW METHODS
                MY_itemView.prototype.initialize.apply(this, arguments);
            },

            startBtn: function(){
              this.channel.vent.trigger("btnStart");
            }
        });

        return StartView;

    });