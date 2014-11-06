define('application/module/module_pixi/view/pixi_item_view',
    [
        'system/core/ma_item_view'
    ],
    function(MA_itemView){

        var ItemView = MA_itemView.extend({
            initialize: function(){
                this.channel.vent.on('module_pixi:update', this.onUpdate);
                this.channel.vent.on('module_pixi:mousemove', this.onMousemove);
            },
            onUpdate:function(){
//                console.log('update');
            },

            onMousemove: function(){
                console.log('mouse move');
            }

        });

        return ItemView;

    });