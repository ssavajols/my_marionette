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

                // @TODO: Initialize canvas
                // ...

            },

            initialize: function(){
                this.setResizeListener();
            },

            start: function () {
                this.triggerViewMethod("onBeforeStart", arguments);

                // @TODO: Start actions
                // ...

                this.triggerViewMethod("onAfterStart", arguments);
            },

            stop: function () {
                this.triggerViewMethod("onBeforeStop", arguments);

                // @TODO: Stop actions
                // ...

                this.triggerViewMethod("onAfterStop", arguments);
            },

            onResize: function(event){
                // @TODO: Resize actions
                // ...

            },

            onUpdate: function(){
                // @TODO: Resize actions
                // ...
            },

            onMouseMove: function(){
                this.triggerViewMethod("onMouseMove", arguments);
            }

        });

        return Behavior;
    });