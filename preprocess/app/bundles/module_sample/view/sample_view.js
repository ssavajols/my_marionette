/**
 * Sample view
 */
define('bundles/module_sample/view/sample_view',
    [
        'behavior/after_render',
        'behavior/scroll',
        'behavior/resize'
    ],
    function(BehaviorAfterRender, BehaviorScroll, BehaviorResize){

        var SampleView = Backbone.Marionette.ItemView.extend({
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