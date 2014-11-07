define('application/module/module_pixi/view/pixi_item_view',
    [
    ],
    function(){

        var ItemView = Backbone.Marionette.My.ItemView.extend({
            initialize: function(){
                Backbone.Marionette.My.messageBus.global.vent.on('module_pixi:update', this.onUpdate);
                Backbone.Marionette.My.messageBus.global.vent.on('module_pixi:mousemove', this.onMousemove);
            },
            onUpdate:function(){
            },

            onMousemove: function(){
                console.log('mouse move');
            }

        });

        return ItemView;

    });