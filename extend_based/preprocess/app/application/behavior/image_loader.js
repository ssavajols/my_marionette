define('application/behavior/image_loader',
    [
        "system/core/ma_behavior"
    ],
    function(MA_behavior){

        var Behavior = MA_behavior.extend({

            onShow: function(){
                _.defer(_.bind(function(){
                    console.log(this.$el.find('.question-image').length);
                }, this));
            }
        });

        return Behavior;
    });