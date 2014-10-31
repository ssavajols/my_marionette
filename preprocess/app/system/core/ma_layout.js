/**
 * Core layout
 */
define('system/core/ma_layout',
    [
        "application/config/config"
    ],
    function(config){

    var Layout = Backbone.Marionette.LayoutView.extend({

        channel: Backbone.Wreqr.radio.channel(config.globalChannelName || 'global'),

        template: false,

        regions: {
            header: ".header",
            content: ".content",
            footer: ".footer"
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

        setView: function(view, region, show, callback){

            if( view && region && this[region] ){

                if( this[region].currentView ){
                    this[region].empty();
                }

                this[region].show(view);

                if(show) {
                    this.fadeIn(500, region, callback);
                }else if( typeof callback === "function"  ){
                    callback();
                }
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
        }
    });

    return Layout;
});