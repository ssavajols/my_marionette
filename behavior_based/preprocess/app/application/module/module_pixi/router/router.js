/**
 * Sample router
 */
define('application/module/module_pixi/router/router',
    [
        "application/module/module_pixi/controller/controller"
    ],
    function(Controller){

        var Router = Backbone.Marionette.SubRouter.extend({

            initialize: function(options){
                this.controller = new Controller(options);
            },

            appRoutes: {
                "sample": "sample",
                "": "index"
            }
        });

        return Router;

    });