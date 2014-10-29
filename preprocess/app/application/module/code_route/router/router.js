define('application/module/code_route/router/router',
    [
        "application/core/ma_sub_router",
        "application/module/code_route/controller/controller"
    ],
    function(MA_sub_router, Controller){

        var Router = MA_sub_router.extend({

            initialize: function(options){
                this.controller = new Controller(options);
            },

            appRoutes: {
                "": "index"
            }
        });

        return Router;

    });