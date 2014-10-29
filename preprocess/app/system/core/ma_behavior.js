/**
 * Core behavior class
 */
define('system/core/ma_behavior', function(){

    var Behavior = Backbone.Marionette.Behavior.extend({
        channel: Backbone.Wreqr.radio.channel('global')
    });

    return Behavior;
});