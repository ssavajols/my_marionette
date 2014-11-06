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
define('application/module/module_sample/module_sample',
    [
        "system/application",
        "system/core/ma_module",
        "application/module/module_sample/router/router"
    ],
    function(Application, MA_module, Router){

        Application.module('module_sample', {
            startWithParent: false,
            moduleClass: MA_module,
            initialize: function(options){
                this.on('start', function(baseRoute){
                   new Router(baseRoute);
                });

                Backbone.Marionette.Module.prototype.initialize.apply(this, arguments);
            }
        });

    });