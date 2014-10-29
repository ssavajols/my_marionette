define('application/behavior/mousemove',
    [
        "system/core/ma_behavior"
    ],
    function(MA_behavior){

        var Behavior = MA_behavior.extend({

            events: {
                "mousemove": "onMousemove"
            },

            onMousemove: function(events){
                console.log(events);
            }
        });

        return Behavior;
});