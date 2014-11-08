define('application/module/code_route/view/layout',
    [
    ],
    function(){

        var Layout = Marionette.My.LayoutView.extend({
            template:"#layout",

            className: "code-route",

            regions: {
                header: ".layout-header",
                content: ".layout-content",
                footer: ".layout-footer"
            }
        });

        return Layout;

    });