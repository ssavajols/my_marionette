/**
 * Global application layout
 */
define('system/application_layout',
    [
        "config/config",
        "core/marionette.my.layout_view",
        "core/marionette.my.region"
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