/**
 * Core composite view class
 *
 * Set template to anonymous function, scroll and resize listeners
 * Auto subscribe to global channel
 *
 */
define('system/core/marionette.my.composite_view',
    [
        "application/config/config"
    ],
    function(config){

        if( !Marionette.My ){
            Marionette.My = {};
        }

        Marionette.My.CompositeView = Marionette.CompositeView.extend({

            template: false
        });

    });