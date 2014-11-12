define('bundles/code_route/router/router',
    [
        "bundles/code_route/controller/controller"
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