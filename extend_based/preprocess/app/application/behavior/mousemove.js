define('application/behavior/mousemove',
    [
        "system/core/ma_behavior"
    ],
    function(MA_behavior){

        var Behavior = MA_behavior.extend({

            events: {
                "mousemove": "onMouseMove"
            },

            onMouseMove: function(events){
                console.log(events);
            }
        });

        return Behavior;
});