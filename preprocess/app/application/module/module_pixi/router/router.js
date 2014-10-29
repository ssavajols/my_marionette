/**
 * Sample router
 */
define('application/module/module_pixi/router/router',
    [
        "system/core/ma_sub_router",
        "application/module/module_pixi/controller/controller"
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