/**
 * Global application layout
 */
define('system/application_layout',
    [
        "system/core/ma_layout",
        "system/core/ma_region_transition"
    ],
    function(MA_layout, MA_regionTransition){

    var Layout = MA_layout.extend({

        regions: {
            header: new MA_regionTransition({el:"#header"}),
            content: new MA_regionTransition({el:"#content"}),
            footer: new MA_regionTransition({el:"#footer"})
        },

        initialize: function(){
            this.addRegions({
                modal: "#modal"
            });

            this.$el.append('<div id="modal"></div>');

            MA_layout.prototype.initialize.apply(this, arguments);
        }
    });

    return Layout;
});