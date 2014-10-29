define('system/application_router',

    [
        "system/core/ma_app_router",
        "system/application_controller",
        "application/config/module_routes"
    ],

    function(MA_app_router, Controller, moduleRoutes){

        var Router = MA_app_router.extend({

            initialize: function(options){
                console.log(options);
                this.controller = new Controller(options);
                this.controller.moduleRoutes = this.moduleRoutes;
            },

            appRoutes: {
                ":module(/*subRoute)": "runModule",
                "": "index"
            },

            moduleRoutes: moduleRoutes

        });

        return Router;

    });