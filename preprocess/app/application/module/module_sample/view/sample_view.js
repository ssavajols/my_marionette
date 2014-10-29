/**
 * Sample view
 */
define('application/module/module_sample/view/sample_view',
    [
        "system/core/ma_item_view"
    ],
    function(MA_itemView){

        var SampleView = MA_itemView.extend({
            template:"<div>This is a module sample view</div>"
        });

        return SampleView;

    });