/**
 * Core layout
 */
define('system/core/marionette.my.layout_view',
    [
        "application/config/config"
    ],
    function(config){


    if( !Marionette.My ){
        Marionette.My = {};
    }

        Backbone.Marionette.My.LayoutView = Backbone.Marionette.LayoutView.extend({

        template: false,

        regionClass: Marionette.My.Region,

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


    });

});