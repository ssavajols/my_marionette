/**
 * Global application initialize
 */
define('system/application_initializer',
    [
        "system/application",
        "system/application_router",
        "system/application_layout",
        "core/marionette.my.message_bus",
        "config/config"
    ],
    function(Application, Router, Layout, messageBus, config){

    var appLayout = new Layout();

    // REGIONS
    Application.addInitializer(function(){
        Application.addRegions({
            mainRegion: config.container
        });

        if( appLayout.template !== false ){
            Application.mainRegion.show(appLayout);
        }
    });

    // EVENTS
    Application.addInitializer(function(){
        $(window).on('scroll', function(event){
            messageBus.vent.trigger("custom:scroll", event);
        });

        $(window).on('resize', function(event){
            messageBus.vent.trigger("custom:resize", event);
        });
    });

   // COMMANDS
    Application.addInitializer(function(){
        messageBus.commands.setHandler("setView", function(view, region, show, callback){
            appLayout.setView(view, region, show, callback);
       });

        messageBus.commands.setHandler('removeView', function(region, hide, callback){
            appLayout.removeView(region, hide, callback);
        });

        messageBus.commands.setHandler('fadeOut', function(region, callback){
           appLayout.fadeOut(500, region, callback);
        });

        messageBus.commands.setHandler('fadeIn', function(region, callback){
           appLayout.fadeIn(500, region, callback);
        });
    });

    // RES REQ
    Application.addInitializer(function(){
        messageBus.reqres.setHandler('getApp', function(){
          return Application;
       });
    });

    Application.addInitializer(function(){
        messageBus.reqres.setHandler('getSettings', function(){
          return config;
       });
    });

    // BEHAVIORS LOOKUP
    Application.addInitializer(function(){
       Marionette.Behaviors.behaviorsLookup = function(){
           if( !Marionette[config.namespace] ){
               Marionette[config.namespace] = {};
           }

           return Marionette[config.namespace].BehaviorsLookup;
       };
    });

    // ROUTER
    Application.addInitializer(function(){
       new Router({app: Application, opt: config});
    });

    Application.on('start', function(){

       var historyConfig = {};

       historyConfig.pushState = config.urlPushState;
       historyConfig.silent = false;

       if( config.base_url ){
        historyConfig.root = config.base_url;
       }

       Backbone.history.start(historyConfig);
    });

    return Application;
});