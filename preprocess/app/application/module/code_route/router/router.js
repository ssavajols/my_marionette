define('application/module/code_route/router/router',
    [
        "application/module/code_route/controller/controller"
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