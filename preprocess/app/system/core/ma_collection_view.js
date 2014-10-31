/**
 * Core collection view class
 *
 * Set template to anonymous function, scroll and resize listeners
 * Auto subscribe to global channel
 *
 */
define('system/core/ma_collection_view',
    [
        "application/config/config"
    ],
    function(config){
    var CollectionView = Backbone.Marionette.CollectionView.extend({

        channel: Backbone.Wreqr.radio.channel(config.globalChannelName || 'global'),

        template: false,

        initialize: function(){
            this.setResizeListener();
            this.setScrollListener();

            Backbone.Marionette.CollectionView.prototype.initialize.apply(this, arguments);
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

    return CollectionView;
});