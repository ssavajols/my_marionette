/**
 * Sample router
 */
define('module/module_sample/router/router',
    [
        "application/module/module_sample/controller/controller"
    ],
    function(Controller){

        var Router = Marionette.My.SubRouter.extend({

            initialize: function(options){
                this.controller = new Controller(options);
            },

            appRoutes: {
                "": "index"
            }
        });

        return Router;

    });