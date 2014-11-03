define('application/module/code_route/view/layout',
    [
        "system/core/ma_layout",
        "application/core/my_region_transition"
    ],
    function(MA_layout, MY_regionTransition){

        var Layout = MA_layout.extend({
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