/**
 * Sample router
 */
define('bundles/module_sample/router/router',
    [
        "application/bundles/module_sample/controller/controller"
    ],
    function(Controller){

        var Router = Marionette.SubRouter.extend({

            initialize: function(options){
                this.controller = new Controller(options);
            },

            appRoutes: {
                "": "index"
            }
        });

        return Router;

    });