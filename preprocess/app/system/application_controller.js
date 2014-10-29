/**
 * Global application controller
 */
define('system/application_controller',
    [
    ],
    function(){

        var Controller = Backbone.Marionette.Controller.extend({

            initialize: function(options){
                this.options = options.opt;
                this.application = options.app;
                this.mainModule = options.opt.mainModule;
            },

            index: function(baseRoute){
                var redirectURI;

                if( !this.options.urlPushState && !window.location.hash ){

                    redirectURI = window.location.href.replace("http://"+window.location.hostname+this.options.base_url, "");

                    if( redirectURI ){
                        Backbone.history.navigate(redirectURI, {trigger: true});
                    }
                }

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