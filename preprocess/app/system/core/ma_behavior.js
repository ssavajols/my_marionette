/**
 * Core behavior class
 */
define('system/core/ma_behavior',
    [
        "application/config/config"
    ],
    function(config){

    var Behavior = Backbone.Marionette.Behavior.extend({

        channel: Backbone.Wreqr.radio.channel(config.globalChannelName || 'global'),

        triggerViewMethod: function(method, args){

            var methodName = "on" + method.charAt(0).toUpperCase() + method.slice(1);

            if( this.view && this.view[methodName]){
                this.view[methodName].apply(this.view, args);
            }
        },

        initialize: function(){

            this.setResizeListener();
            this.setScrollListener();

            Backbone.Marionette.Behavior.prototype.initialize.apply(this, arguments);
        },

        setResizeListener: function(){
            this.channel.vent.on('custom:resize', _.bind(this.onResize, this));
        },

        setScrollListener: function(){
            this.channel.vent.on('custom:scroll', _.bind(this.onResize, this));
        }
    });

    return Behavior;
});