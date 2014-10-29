define('application/core/ma_item_view', function(){
    var View = Backbone.Marionette.ItemView.extend({

        channel: Backbone.Wreqr.radio.channel('global'),

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

    return View;
});