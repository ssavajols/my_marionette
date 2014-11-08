/**
 * Global application router
 */
define('system/application_router',

    [
        "application/config/config",
        "system/application_controller",
        "application/config/module_routes"
    ],

    function(config, Controller, moduleRoutes){

        var Router = Marionette[config.namespace].AppRouter.extend({

            initialize: function(options){

                this.controller = new Controller(options);
                this.controller.moduleRoutes = this.moduleRoutes;

                Marionette[config.namespace].AppRouter.prototype.initialize.apply(this, arguments);
            },

            appRoutes: {
                ":module(/*subRoute)": "runModule",
                "*actions": "index"
            },

            moduleRoutes: moduleRoutes

        });

        return Router;

    });