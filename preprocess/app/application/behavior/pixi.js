define('application/behavior/pixi',
    [
        "system/core/ma_behavior"
    ],
    function(MA_behavior){

        var Behavior = MA_behavior.extend({

            updateAnimationFrame:null,

            events: {
                "mousemove canvas": "onMouseMove"
            },

            /**
             *
             */
            onShow: function(){
                this.$el.append('<canvas></canvas>');

                this.start();
            },

            /**
             *
             */
            initialize: function(){

                this.view.on('destroy', _.bind(this.onDestroy, this));

                this.setResizeListener();
            },

            /**
             *
             */
            start: function () {
                this.triggerViewMethod("onBeforeStart", arguments);

                _.bind(function animate(){

                    this.updateAnimationFrame = requestAnimationFrame(_.bind(animate, this));

                    this.onUpdate();
                },this)();

                this.triggerViewMethod("onAfterStart", arguments);
            },

            /**
             *
             */
            stop: function () {
                this.triggerViewMethod("onBeforeStop", arguments);

                window.cancelAnimationFrame(this.updateAnimationFrame);

                this.triggerViewMethod("onAfterStop", arguments);
            },

            /**
             *
             */
            onDestroy: function(){
                this.stop();
            },

            /**
             *
             * @param event
             */
            onResize: function(event){

            },

            /**
             *
             */
            onUpdate: function(){

                this.triggerViewMethod('onUpdate', {});

            },

            /**
             *
             */
            onMouseMove: function(){
                this.triggerViewMethod("onMouseMove", arguments);
            }

        });

        return Behavior;
    });