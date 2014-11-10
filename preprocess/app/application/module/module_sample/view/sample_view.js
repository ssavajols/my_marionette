/**
 * Sample view
 */
define('application/module/module_sample/view/sample_view',
    [
        'system/behavior/after_render',
        'system/behavior/scroll',
        'system/behavior/resize'
    ],
    function(BehaviorAfterRender, BehaviorScroll, BehaviorResize){

        var SampleView = Backbone.Marionette.My.ItemView.extend({
            template:"<div>This is a module sample view</div>",
            behaviors: {
                afterRender: {
                    behaviorClass: BehaviorAfterRender
                },
                scroll: {
                    behaviorClass: BehaviorScroll
                },
                resize: {
                    behaviorClass: BehaviorResize
                }
            },

            onAfterRender: function(){
                console.log('afterRender !!!');
            },

            onScroll: function(event){
                console.log('scroll !!!', event);
            },

            onResize: function(event){
                console.log('resize !!!', event);
            }
        });

        return SampleView;

    });