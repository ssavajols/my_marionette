/**
 * Core layout
 */
define('system/core/marionette.my.layout_view',
    [
        "application/config/config"
    ],
    function(config){


    if( !Backbone.Marionette.My ){
        Backbone.Marionette.My = {};
    }

        Backbone.Marionette.My.LayoutView = Backbone.Marionette.LayoutView.extend({

        channel: Backbone.Wreqr.radio.channel(config.globalChannelName || 'global'),

        template: false,

        regionClass: Backbone.Marionette.My.Region,

        render: function(){

            Backbone.Marionette.LayoutView.prototype.render.apply(this, arguments);

            _.defer(_.bind(this.onAfterRender,this));
        },

        removeView: function(region, callback){

            if( !this[region] ){
                return;
            }

            this[region].empty();

            if( typeof callback === "function" ){
                callback();
            }
        },

        setView: function(view, region, options, callback){

            if( view && region && this[region] ){

                if( this[region].currentView === view ){
                    return;
                }

                this[region].show(view, options, callback);

            }
        },

        onAfterRender: $.noop

    });

});