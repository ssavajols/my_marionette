/**
 * Core collection view class
 *
 * Set template to anonymous function, scroll and resize listeners
 * Auto subscribe to global channel
 *
 */
define('system/core/marionette.my.collection_view',
    [
        "application/config/config"
    ],
    function(config){

        if( !Backbone.Marionette.My ){
            Backbone.Marionette.My = {};
        }

        Backbone.Marionette.My.CollectionView = Backbone.Marionette.CollectionView.extend({

        channel: Backbone.Wreqr.radio.channel(config.globalChannelName || 'global'),

        template: false,

        initialize: function(){

            this.channel.vent.on('custom:scroll', _.bind(this.onScroll, this));
            this.channel.vent.on('custom:resize', _.bind(this.onResize, this));

            Backbone.Marionette.CollectionView.prototype.initialize.apply(this, arguments);
        },

        render: function(){

            Backbone.Marionette.CollectionView.prototype.render.apply(this, arguments);

            _.defer(_.bind(this.onAfterRender,this));
        },

        onResize: $.noop,

        onScroll: $.noop,

        onAfterRender: $.noop
    });

    return CollectionView;
});