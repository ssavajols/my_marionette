/**
 * Sample router
 */
define('application/module/module_pixi/router/router',
    [
        "application/module/module_pixi/controller/controller"
    ],
    function(Controller){

        var Router = Marionette.My.SubRouter.extend({

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