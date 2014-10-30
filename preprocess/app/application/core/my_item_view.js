/**
 * Override core classes
 *
 * To override item_view, import ma_item_view from system/core and extend it with your own methods.
 * Which MY_item_view instance will inherit with Marionette.ItemView / MA_item_view / MY_item_view methods.
 */
define('application/core/my_item_view',
    [
        "system/core/ma_item_view"
    ],
    function(MA_itemView){

       var ItemView =  MA_itemView.extend({
           override: true
       });

        return ItemView;
    });