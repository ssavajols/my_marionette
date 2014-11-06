/**
 * Global application controller
 */
define('system/application_controller',
    [
        'system/core/ma_controller'
    ],
    function(MA_controller){

        var Controller = MA_controller.extend({

            initialize: function(options){
                this.options = options.opt;
                this.application = options.app;
                this.mainModule = options.opt.mainModule;
            },

            index: function(baseRoute){
                if( this.application[this.mainModule]){
                    this.application.module(this.mainModule).start(baseRoute);
                }
            },

            runModule: function(routeName){

                var moduleName;

                if( this.moduleRoutes && this.moduleRoutes[routeName] ){
                    moduleName = this.moduleRoutes[routeName];
                }

                _.each(this.moduleRoutes, function(routes, module){
                    moduleName = _.indexOf(routes, routeName) != -1 ? module : moduleName;
                });

                if( !moduleName || !this.application[moduleName] ){
                    this.index.apply(this, arguments);
                }

                if( this.application[moduleName]){
                    this.application.module(moduleName).start(routeName);
                }
            }
        });

        return Controller;
    });