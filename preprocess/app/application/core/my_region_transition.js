define('application/core/my_region_transition',
    [
        'system/core/ma_region_transition'
    ],
    function(MA_regionTransition){

        var RegionTransition = MA_regionTransition.extend({

            initialize: function(){

                this.addTransition("slideFromRight", this.slideFromRight);
                this.addTransition("slideFromLeft", this.slideFromLeft);

            },

            slideFromRight: function(currentView, view, callback){

                var viewParentWidth = view.$el.parent().width();

                TweenLite.fromTo(currentView.$el, 0.4, {zIndex: 1}, {x: -viewParentWidth, opacity:0.8});
                TweenLite.fromTo(view.$el, 0.4, {zIndex: 2, x: viewParentWidth}, {x:0, onComplete:function(){ callback();}});

            },

            slideFromLeft: function(currentView, view, callback){

                var viewParentWidth = view.$el.parent().width();

                TweenLite.fromTo(currentView.$el, 0.4, {zIndex: 1}, {x: viewParentWidth, opacity:0.8});
                TweenLite.fromTo(view.$el, 0.4, {zIndex: 2, x: -viewParentWidth}, {x:0, onComplete:function(){ callback();}});

            },

            slideFromBottom: function(currentView, view, callback){

                var viewParentHeight = view.$el.parent().height();

                TweenLite.fromTo(currentView.$el, 0.4, {zIndex: 1}, {y: viewParentHeight, opacity:0.8});
                TweenLite.fromTo(view.$el, 0.4, {zIndex: 2, y: -viewParentHeight}, {y:0, onComplete:function(){ callback();}});

            },

            slideFromTop: function(currentView, view, callback){

                var viewParentHeight = view.$el.parent().height();

                TweenLite.fromTo(currentView.$el, 0.4, {zIndex: 1}, {y: viewParentHeight, opacity:0.8});
                TweenLite.fromTo(view.$el, 0.4, {zIndex: 2, y: -viewParentHeight}, {y:0, onComplete:function(){ callback();}});

            },

        });

        return RegionTransition;
});