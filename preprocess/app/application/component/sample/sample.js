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
        "system/core/ma_module",
        "application/component/sample/view/sample_layout"
    ],
    function(Application, MA_module, SampleLayout){

        Application.module('sample', {
            moduleClass: MA_module,
            initialize: function(){
                this.channel.commands.execute('setView', new SampleLayout(), 'header');
            }
        });

    });