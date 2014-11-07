/**
 * Component main file definition
 *
 * This entry point will start module when route to this module is valid.
 *
 * Import application global object to set module
 *
 */
define('application/component/sample/sample',
    [
        "system/application",
        "application/component/sample/view/sample_layout"
    ],
    function(Application, SampleLayout){

        Application.module('sample', {
            initialize: function(){

                Backbone.Marionette.My.messageBus.global.commands.execute('setView', new SampleLayout(), 'header');

                Backbone.Marionette.Module.prototype.initialize.apply(this, arguments);
            }
        });

    });