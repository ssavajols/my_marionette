/**
 * Core controller class
 */
define('system/core/ma_controller', function(){

    var Controller = Backbone.Marionette.Controller.extend({
        channel: Backbone.Wreqr.radio.channel('global')
    });

    return Controller;
});