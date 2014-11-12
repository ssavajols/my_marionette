/**
 * Component main file definition
 *
 * This entry point will start module when route to this module is valid.
 *
 * Import application global object to set module
 *
 */
define('component/sample/sample',
    [
        "system/application",
        "component/sample/view/sample_layout"
    ],
    function(Application, SampleLayout){

        Application.module('sample', {
            moduleClass: Marionette.My.Module,
            initialize: function(){

                Marionette.My.messageBus.global.commands.execute('setView', new SampleLayout(), 'header');

                Marionette.My.Module.prototype.initialize.apply(this, arguments);
            }
        });

    });