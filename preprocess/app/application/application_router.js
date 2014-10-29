define('application/application_router',

    [
        "application/core/ma_app_router",
        "application/application_controller"
    ],

    function(MA_app_router, Controller){

        var Router = MA_app_router.extend({

            initialize: function(options){
                this.controller = new Controller(options);
                this.controller.moduleRoutes = this.moduleRoutes;
            },

            appRoutes: {
                ":module(/*subRoute)": "runModule",
                "": "index"
            },

            moduleRoutes: {
                "code_route": ["code_route", "page", "abc"],
                "module_sample": ["module_sample", "test", "def"]
            }

        });

        return Router;

    });