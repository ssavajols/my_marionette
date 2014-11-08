/**
 * Global application layout
 */
define('system/application_layout',
    [
        "application/config/config",
        "system/core/marionette.my.layout_view"
    ],
    function(config){

    var Layout = Marionette[config.namespace].LayoutView.extend({

        regions: {
            header: new Marionette[config.namespace].Region({el:"#header"}),
            content: new Marionette[config.namespace].Region({el:"#content"}),
            footer: new Marionette[config.namespace].Region({el:"#footer"})
        },

        initialize: function(){
            this.addRegions({
                modal: "#modal"
            });

            this.$el.append('<div id="modal"></div>');

            Marionette[config.namespace].LayoutView.prototype.initialize.apply(this, arguments);
        }
    });

    return Layout;
});