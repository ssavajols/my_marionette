define('application/helper/transitions', function () {

    return {

        fade: function(currentView, view, callback){

            var baseTop = 95;
            var baseLeft = 20;

            TweenLite.fromTo(currentView.$el, 0.25, {zIndex:1}, {opacity: 0});

            TweenLite.fromTo(view.$el, 1, { zIndex:2, width:view.$el.parent().width(), height:view.$el.parent().height(), opacity: 0, position: "absolute", left:baseLeft, top:baseTop}, {opacity:1, delay:0.05, onComplete: function(){
                view.$el.removeAttr('style');
                callback();
            }});

        },

        cut: function (currentView, view, callback) {
            callback();
        },

        slideFromRight: function (currentView, view, callback) {

            var viewParentWidth = view.$el.parent().width();

            TweenLite.fromTo(currentView.$el, 0.4, {zIndex: 1}, {x: -viewParentWidth, opacity: 0.8});
            TweenLite.fromTo(view.$el, 0.4, {zIndex: 2, x: viewParentWidth}, {x: 0, onComplete: function () {
                callback();
            }});

        },

        slideFromLeft: function (currentView, view, callback) {

            var viewParentWidth = view.$el.parent().width();

            TweenLite.fromTo(currentView.$el, 0.4, {zIndex: 1}, {x: viewParentWidth, opacity: 0.8});
            TweenLite.fromTo(view.$el, 0.4, {zIndex: 2, x: -viewParentWidth}, {x: 0, onComplete: function () {
                callback();
            }});

        },

        slideFromBottom: function (currentView, view, callback) {

            var viewParentHeight = view.$el.parent().height();

            TweenLite.fromTo(currentView.$el, 0.4, {zIndex: 1}, {y: viewParentHeight, opacity: 0.8});
            TweenLite.fromTo(view.$el, 0.4, {zIndex: 2, y: -viewParentHeight}, {y: 0, onComplete: function () {
                callback();
            }});

        },

        slideFromTop: function (currentView, view, callback) {

            var viewParentHeight = view.$el.parent().height();

            TweenLite.fromTo(currentView.$el, 0.4, {zIndex: 1}, {y: viewParentHeight, opacity: 0.8});
            TweenLite.fromTo(view.$el, 0.4, {zIndex: 2, y: -viewParentHeight}, {y: 0, onComplete: function () {
                callback();
            }});

        }
    };
});