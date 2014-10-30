// Module Definition
define('application/module/code_route/code_route',
    [
        "system/application",
        "system/core/ma_module",
        "application/module/code_route/router/router"
    ],
    function(Application, MA_module, Router){

        Application.module('code_route', {
            startWithParent: false,
            moduleClass: MA_module,
            initialize: function(options){

                this.on('start', function(baseRoute){
                   new Router(baseRoute);
                });

                Object.getPrototypeOf(this).initialize.apply(this, arguments);
            }
        });

    });