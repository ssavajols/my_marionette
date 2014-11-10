/**
 * Core collection view class
 *
 * Set template to anonymous function, scroll and resize listeners
 * Auto subscribe to global channel
 *
 */
define('system/core/marionette.my.collection_view',
    [
        "application/config/config"
    ],
    function(config){

        if( !Marionette[config.namespace] ){
            Marionette[config.namespace] = {};
        }

        Marionette[config.namespace].CollectionView = Marionette.CollectionView.extend({

            template: false

        });

    });