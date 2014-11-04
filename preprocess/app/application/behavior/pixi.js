define('application/behavior/pixi',
    [
        "system/core/ma_behavior"
    ],
    function(MA_behavior){

        var Behavior = MA_behavior.extend({

            events: {
                "mousemove canvas": "onUserInteraction",
                "touchmove canvas": "onUserInteraction",

                "mousedown canvas": "onUserInteraction",
                "touchstart canvas": "onUserInteraction",

                "mouseup canvas": "onUserInteraction",
                "touchend canvas": "onUserInteraction",

                "mouseenter canvas": "onUserInteraction",
                "mouseleave canvas": "onUserInteraction",

                "click canvas": "onUserInteraction"
            },

            updateAnimationFrame:null,

            /**
             *
             */
            onBeforeShow: function(){
                this.$el.append('<canvas></canvas>');

                if( this.autoStart ){
                    this.start();
                }
            },

            /**
             *
             */
            initialize: function(){

                this.view.on('destroy', _.bind(this.onDestroy, this));

                this.autoStart = this.options.autoStart !== false;

                MA_behavior.prototype.initialize.apply(this);
            },

            /**
             *
             */
            start: function () {
                this.triggerViewMethod("beforeStart", arguments);

                _.bind(function animate(){

                    this.updateAnimationFrame = requestAnimationFrame(_.bind(animate, this));

                    this.onUpdate();
                },this)();

                this.triggerViewMethod("afterStart", arguments);
            },

            /**
             *
             */
            stop: function () {
                this.triggerViewMethod("beforeStop", arguments);

                window.cancelAnimationFrame(this.updateAnimationFrame);

                this.triggerViewMethod("afterStop", arguments);
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

                this.triggerViewMethod('resize', event);

            },

            /**
             *
             */
            onUpdate: function(){

                this.triggerViewMethod('update', {});

            },

            onUserInteraction: function(event){

                this.triggerViewMethod(event.type, event);

            },


            onStart: function(){
                this.start();
            }

        });

        return Behavior;
    });
