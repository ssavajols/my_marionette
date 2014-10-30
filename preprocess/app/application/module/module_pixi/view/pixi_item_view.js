define('application/module/module_pixi/view/pixi_item_view',
    [
        'system/core/ma_item_view'
    ],
    function(MA_itemView){

        var ItemView = MA_itemView.extend({
            initialize: function(){
                this.channel.vent.on('module_pixi:update', this.onUpdate);
            },
            onUpdate:function(){
            }
        });

        return ItemView;

    });