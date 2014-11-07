/**
 * Global application layout
 */
define('system/application_layout',
    [
        "system/core/marionette.my.layout_view"
    ],
    function(){

    var Layout = Backbone.Marionette.My.LayoutView.extend({

        regions: {
            header: new Backbone.Marionette.My.Region({el:"#header"}),
            content: new Backbone.Marionette.My.Region({el:"#content"}),
            footer: new Backbone.Marionette.My.Region({el:"#footer"})
        },

        initialize: function(){
            this.addRegions({
                modal: "#modal"
            });

            this.$el.append('<div id="modal"></div>');

            Backbone.Marionette.My.LayoutView.prototype.initialize.apply(this, arguments);
        }
    });

    return Layout;
});