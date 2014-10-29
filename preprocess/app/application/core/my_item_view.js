define('application/core/my_item_view',
    [
        "system/core/ma_item_view"
    ],
    function(MA_item_view){
       var ItemView =  MA_item_view.extend({
           override: true
       });

        return ItemView;
    });