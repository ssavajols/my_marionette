/**
 * Module main file definition
 *
 * This entry point will start module when route to this module is valid.
 *
 * Import application global object to set module
 *
 * Import router as necessary
 *
 * startWithParent: false
 *      Prevent auto start module
 *      Set to true to auto start module on start global application
 *
 */
define('bundles/module_sample/module_sample',
    [
        "system/application",
        "application/bundles/module_sample/router/router"
    ],
    function(Application, Router){

        Application.module('module_sample', {
            startWithParent: false,
            initialize: function(options){
                this.on('start', function(baseRoute){
                   new Router(baseRoute);
                });

                Marionette.Module.prototype.initialize.apply(this, arguments);
            }
        });

    });