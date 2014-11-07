// Module Definition
define('application/module/code_route/code_route',
    [
        "system/application",
        "application/module/code_route/router/router"
    ],
    function(Application, Router){

        Application.module('code_route', {
            startWithParent: false,
            initialize: function(options){

                this.on('start', function(baseRoute){
                   new Router(baseRoute);
                });

                Backbone.Marionette.Module.prototype.initialize.apply(this, arguments);
            }
        });

    });