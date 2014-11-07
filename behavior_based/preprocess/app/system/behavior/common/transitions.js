define('system/behavior/region/transitions', function(){

    var Behavior = Backbone.Marionette.My.Behavior.extend({
       transitions: {

           fade: function(currentView, view, callback){
               TweenLite.to(currentView.$el, 0, {display:"none"});
               TweenLite.fromTo(view.$el, 1, { opacity: 0}, {opacity:1, delay:0.05, onComplete: function(){ callback();}});

           },

           cut: function(currentView, view, callback){
               callback();
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

           }
       },

       initialize: function(){
           console.log(this);
       }
    });
});