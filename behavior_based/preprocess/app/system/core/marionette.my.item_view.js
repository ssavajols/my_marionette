/**
 * Core item view class
 *
 * Set template to anonymous function, scroll and resize listeners
 * Auto subscribe to global channel
 *
 */
define('system/core/marionette.my.item_view',
    [
        "application/config/config"
    ],
    function(config){

        if( !Backbone.Marionette.My ){
            Backbone.Marionette.My = {};
        }

        Backbone.Marionette.My.ItemView = Backbone.Marionette.ItemView.extend({

        channel: Backbone.Wreqr.radio.channel(config.globalChannelName || 'global'),

        template: false,

        initialize: function(){

            this.channel.vent.on('custom:scroll', _.bind(this.onScroll, this));
            this.channel.vent.on('custom:resize', _.bind(this.onResize, this));

            Backbone.Marionette.ItemView.prototype.initialize.apply(this, arguments);
        },

        render: function(){

            Backbone.Marionette.ItemView.prototype.render.apply(this, arguments);

            _.defer(_.bind(this.onAfterRender,this));
        },

        onResize: $.noop,

        onScroll: $.noop,

        onAfterRender: $.noop
    });

    return View;
});