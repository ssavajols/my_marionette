define('application/behavior/pixi',
    [
        "system/core/ma_behavior"
    ],
    function(MA_behavior){

        var Behavior = MA_behavior.extend({

            events: {
                "mousemove canvas": "onMouseMove"
            },

            onShow: function(){
                this.$el.append('<canvas></canvas>');
            },


            start: function () {

                this.onBeforeStart();
                this.onAfterStart();
            },

            stop: function () {

                this.onBeforeStop();
                this.onAfterStop();
            },

            onResize: function(){

            },

            onMouseMove: $.noop,
            onBeforeStart: $.noop,
            onBeforeStop: $.noop,
            onAfterStart: $.noop,
            onAfterStop: $.noop
        });

        return Behavior;
    });