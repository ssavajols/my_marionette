/**
 * Sample router
 */
define('application/module/module_sample/router/router',
    [
        "application/module/module_sample/controller/controller"
    ],
    function(Controller){

        var Router = Backbone.Marionette.SubRouter.extend({

            initialize: function(options){
                this.controller = new Controller(options);
            },

            appRoutes: {
                "": "index"
            }
        });

        return Router;

    });