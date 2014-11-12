define('module/code_route/router/router',
    [
        "module/code_route/controller/controller"
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