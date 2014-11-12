/**
 * Global application router
 */
define('system/application_router',

    [
        "config/config",
        "system/application_controller",
        "config/module_routes"
    ],

    function(config, Controller, moduleRoutes){

        var Router = Marionette.AppRouter.extend({

            initialize: function(options){

                this.controller = new Controller(options);
                this.controller.moduleRoutes = this.moduleRoutes;

                Marionette.AppRouter.prototype.initialize.apply(this, arguments);
            },

            appRoutes: {
                ":module(/*subRoute)": "runModule",
                "*actions": "index"
            },

            moduleRoutes: moduleRoutes

        });

        return Router;

    });