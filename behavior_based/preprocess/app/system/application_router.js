/**
 * Global application router
 */
define('system/application_router',

    [
        "system/application_controller",
        "application/config/module_routes"
    ],

    function(Controller, moduleRoutes){

        var Router = Backbone.Marionette.AppRouter.extend({

            initialize: function(options){

                this.controller = new Controller(options);
                this.controller.moduleRoutes = this.moduleRoutes;

                Backbone.Marionette.AppRouter.prototype.initialize.apply(this, arguments);
            },

            appRoutes: {
                ":module(/*subRoute)": "runModule",
                "*actions": "index"
            },

            moduleRoutes: moduleRoutes

        });

        return Router;

    });