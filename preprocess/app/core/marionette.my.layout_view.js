/**
 * Core layout
 */
define('core/marionette.my.layout_view',
    [
        "config/config",
        "core/marionette.my.region"
    ],
    function(config){

        if( !Marionette[config.namespace] ){
            Marionette[config.namespace] = {};
        }

        Marionette[config.namespace].LayoutView = Backbone.Marionette.LayoutView.extend({

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
        }


    });

});