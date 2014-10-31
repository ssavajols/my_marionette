define('application/behavior/pixi',
    [
        "system/core/ma_behavior"
    ],
    function(MA_behavior){

        var Behavior = MA_behavior.extend({

            updateAnimationFrame:null,

            /**
             *
             */
            onShow: function(){
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

                this.triggerViewMethod('resize', {});

            },

            /**
             *
             */
            onUpdate: function(){

                this.triggerViewMethod('update', {});

            },

            onStart: function(){
                this.start();
            }

        });

        return Behavior;
    });