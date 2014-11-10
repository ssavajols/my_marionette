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

        if( !Marionette.My ){
            Marionette.My = {};
        }

        Marionette.My.ItemView = Marionette.ItemView.extend({

            template: false

        });

    });