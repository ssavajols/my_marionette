define('application/module/code_route/view/start_view',
    [
        "application/core/ma_item_view"
    ],
    function(MA_itemView){


        var StartView = MA_itemView.extend({
            template:"#intro",
            ui: {
                start: ".start"
            },
            events: {
                "click @ui.start": "startBtn"
            },

            initialize: function(){

                // OVERRIDE BASE VIEW METHODS
                this.constructor.__super__.initialize.apply(this, arguments);
            },

            startBtn: function(){
              this.channel.vent.trigger("btnStart");
            }
        });

        return StartView;

    });