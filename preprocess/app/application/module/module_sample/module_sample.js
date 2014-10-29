// Module Definition
define('application/module/module_sample/module_sample',
    [
        "application/application",
        "application/module/module_sample/router/router"
    ],
    function(Application, Router){

        Application.module('module_sample', {
            startWithParent: false,

            initialize: function(options){
                this.on('start', function(baseRoute){
                    console.log(baseRoute, "module sample");
                   new Router(baseRoute);
                });
            }
        });

    });