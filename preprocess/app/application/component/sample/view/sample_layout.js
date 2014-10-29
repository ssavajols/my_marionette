/**
 * Sample view
 */
define('application/component/sample/view/sample_layout',
    [
        "system/core/ma_layout"
    ],
    function(MA_layout){

        var SampleView = MA_layout.extend({
            template: function() {
                return "<div class='header-component'></div>This is a component sample view";
            },
            className: "component-sample",
            regions: {
                header: ".header-component"
            }
        });

        return SampleView;

    });