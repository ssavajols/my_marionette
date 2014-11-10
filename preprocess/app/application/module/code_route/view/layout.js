define('application/module/code_route/view/layout',
    [
        'system/behavior/handlebars'
    ],
    function(BehaviorHandlebars){

        var Layout = Marionette.My.LayoutView.extend({
            template:"application/module/code_route/view/template/layout",

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