/**
 * Sample view
 */
define('application/module/module_sample/view/sample_view',
    [
    ],
    function(){

        var SampleView = Backbone.Marionette.My.ItemView.extend({
            template:"<div>This is a module sample view</div>"
        });

        return SampleView;

    });