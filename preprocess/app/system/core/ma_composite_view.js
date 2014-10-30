/**
 * Core composite view class
 *
 * Set template to anonymous function, scroll and resize listeners
 * Auto subscribe to global channel
 *
 */
define('system/core/ma_composite_view',
    [
        "application/config/config"
    ],
    function(config){
    var CompositeView = Backbone.Marionette.CompositeView.extend({

        channel: Backbone.Wreqr.radio.channel(config.globalChannelName || 'global'),

        template: $.noop,

        initialize: function(){
            this.setResizeListener();
            this.setScrollListener();
        },

        setScrollListener: function(){
            this.channel.vent.on('custom:scroll', _.bind(this.onScroll, this));
        },

        setResizeListener: function(){
            this.channel.vent.on('custom:resize', _.bind(this.onResize, this));
        },

        onResize: $.noop,

        onScroll: $.noop
    });

    return CompositeView;
});