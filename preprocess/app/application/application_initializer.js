define('application/application_initializer',
    [
        "application/application",
        "application/application_router",
        "application/application_layout"
    ], 
    function(Application, Router, Layout){

    var appLayout = new Layout();

    // REGIONS
    Application.addInitializer(function(options){
        Application.addRegions({
            mainRegion: options.container
        });

        Application.mainRegion.show(appLayout);
    });

    // EVENTS
    Application.addInitializer(function(options){
        $(window).on('scroll', function(event){
            Application.vent.trigger("custom:scroll", event);
        });

        $(window).on('resize', function(event){
            Application.vent.trigger("custom:resize", event);
        });
    });

   // COMMANDS
    Application.addInitializer(function(options){
       Application.commands.setHandler("setView", function(view, region, show, callback){
            appLayout.setView(view, region, show, callback);
       });

        Application.commands.setHandler('removeView', function(region, hide, callback){
            appLayout.removeView(region, hide, callback);
        });

        Application.commands.setHandler('fadeOut', function(region, callback){
           appLayout.fadeOut(500, region, callback);
        });

        Application.commands.setHandler('fadeIn', function(region, callback){
           appLayout.fadeIn(500, region, callback);
        });
    });

    // RES REQ
    Application.addInitializer(function(options){
       Application.reqres.setHandler('getApp', function(){
          return Application;
       });
    });

    Application.addInitializer(function(options){
       Application.reqres.setHandler('getSettings', function(){
          return options;
       });
    });

    // ROUTER
    Application.addInitializer(function(options){
       new Router({app: Application, opt: options});
    });

    Application.on('start', function(){
       Backbone.history.start();
    });

    return Application;
});