define('application/behavior/scrollable',
    [
        "system/core/ma_behavior"
    ],
    function(MA_behavior){

        var Behavior = MA_behavior.extend({

            onShow: function(){
                // @TODO: set scroll plugin
                // ...
            }
        });

        return Behavior;
    });