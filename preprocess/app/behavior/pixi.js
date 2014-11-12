define('behavior/pixi',
    [
        "config/config"
    ],
    function(config){

        var Behavior = Marionette[config.namespace].Behavior.extend({

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

                this.stage = new PIXI.Stage(0x000000);
                var rendererOptions = {
                    antialiasing:false,
                    transparent:false,
                    resolution:window.devicePixelRatio || 1
                };

                this.renderer = new PIXI[this.renderMode](800, 600, rendererOptions);

                this.$el.append(this.renderer.view);

                _.defer(_.bind(this.onResize, this));

                this.triggerViewMethod('stageReady', this.stage);

                if( this.autoStart ){
                    this.start();
                }
            },

            /**
             *
             */
            initialize: function(){

                this.view.on('beforeDestroy', _.bind(this.onBeforeDestroy, this));

                this.autoStart = this.options.autoStart !== false;
                this.renderMode = this.options.renderMode ? this.options.renderMode : "autoDetectRenderer";
                this.antialiasing = this.options.antialiasing ? this.options.antialiasing : true;

                Marionette[config.namespace].Behavior.prototype.initialize.apply(this);
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
            onBeforeDestroy: function(){
                this.stop();
            },

            /**
             *
             * @param event
             */
            onResize: function(event){

                var customEvent = event || {};

                customEvent.width = this.$el.width();
                customEvent.height = this.$el.height();

                this.renderer.resize(customEvent.width, customEvent.height);

                this.triggerViewMethod('resize', customEvent);

            },

            /**
             *
             */
            onUpdate: function(){

                this.renderer.render(this.stage);

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