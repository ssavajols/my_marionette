define('bundles/code_route/view/layout',
    [
        'behavior/handlebars',
        'core/marionette.my.layout_view',
        'core/marionette.my.region'
    ],
    function(BehaviorHandlebars){

        var Layout = Marionette.My.LayoutView.extend({
            template:"bundles/code_route/view/template/layout",

            className: "code-route",

            regionClass: Marionette.My.Region,

            behaviors: {
                handlebars: {
                    behaviorClass: BehaviorHandlebars
                }
            },

            regions: {
                header: ".layout-header",
                content: ".layout-content",
                footer: ".layout-footer"
            }
        });

        return Layout;

    });