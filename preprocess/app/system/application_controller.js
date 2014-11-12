/**
 * Global application controller
 */
define('system/application_controller',
    [
    ],
    function(){

        var Controller = Marionette.Controller.extend({

            initialize: function(options){
                this.options = options.opt;
                this.application = options.app;
                this.mainModule = options.opt.mainModule;
                this.lastRouteName = null;
                this.lastModule = null;
            },

            index: function(baseRoute){

                if( this.application[this.mainModule]){
                    this.application.module(this.mainModule).start(baseRoute);
                    this.lastRouteName = this.mainModule;
                    this.lastModule = this.mainModule;
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
                    if( this.lastRouteName !== null && routeName !== this.lastRouteName ){
                        this.application.module(this.lastModule).stop();
                    }

                    this.application.module(moduleName).start(routeName);

                    this.lastRouteName = routeName;
                    this.lastModule = moduleName;
                }
            }
        });

        return Controller;
    });