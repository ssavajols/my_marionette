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

            if( this.view && this.view[method]){
                this.view[method].apply(this.view, args);
            }
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