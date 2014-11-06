/**
 * Core layout
 */
define('system/core/ma_layout',
    [
        "system/core/ma_region_transition",
        "application/config/config"
    ],
    function(MA_regionTransition, config){

    var Layout = Backbone.Marionette.LayoutView.extend({

        channel: Backbone.Wreqr.radio.channel(config.globalChannelName || 'global'),

        template: false,

        regionClass: MA_regionTransition,

        render: function(){

            Backbone.Marionette.LayoutView.prototype.render.apply(this, arguments);

            _.defer(_.bind(this.onAfterRender,this));
        },

        removeView: function(region, hide, callback){

            if( !this[region] ){
                return;
            }

            this.fadeOut(hide ? 500 : 1, region, _.bind(function(){
                this[region].empty();

                if( typeof callback === "function" ){
                    callback();
                }
            }, this));
        },

        setView: function(view, region, options, callback){

            if( view && region && this[region] ){

                if( this[region].currentView === view ){
                    return;
                }

                this[region].show(view, options, callback);

            }
        },

        fadeIn: function(time, region, callback){

            if( !this[region]){
                return;
            }

            this[region].$el.fadeIn(time, callback);
        },

        fadeOut: function(time, region, callback){

            if( !this[region]){
                return;
            }

            this[region].$el.fadeOut(time, callback);
        },

        onAfterRender: $.noop
    });

    return Layout;
});