define('system/core/marionette.my.behavior',
    [
        'application/config/config'
    ],
    function(config){

    if( !Backbone.Marionette.My ){
        Backbone.Marionette.My = {};
    }

    Backbone.Marionette.My.Behavior = Backbone.Marionette.Behavior.extend({

        channel: Backbone.Wreqr.radio.channel(config.globalChannelName || 'global'),

        triggerViewMethod: function(method, args){

            var methodName = "on" + method.charAt(0).toUpperCase() + method.slice(1);

            if( this.view && this.view[methodName]){
                this.view[methodName].call(this.view, args);
            }
        },

        initialize: function(){

            this.channel.vent.on('custom:resize', _.bind(this.onResize, this));
            this.channel.vent.on('custom:scroll', _.bind(this.onScroll, this));

            Backbone.Marionette.Behavior.prototype.initialize.apply(this, arguments);
        },

        onResize: $.noop,
        onScroll: $.noop
    });

});