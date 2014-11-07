define('system/core/marionette.my.region',
    [
        "system/behavior/region/transitions"
    ],
    function(Transitions){


        if( !Backbone.Marionette.My ){
            Backbone.Marionette.My = {};
        }

        Backbone.Marionette.My.Region= Backbone.Marionette.Region.extend({

            transitions: {},

            behaviors: {
               transitions: {
                   behaviorClass: Transitions
               }
            },

            addTransition: function(name, func){
                this.transitions[name] = func;
            },

            show: function(view, options) {


                this._ensureElement();

                var showOptions = $.extend({
                    transition: "fade"
                }, options || {});

                var isDifferentView = view !== this.currentView;
                var preventDestroy = !!showOptions.preventDestroy;
                var forceShow = !!showOptions.forceShow;

                // we are only changing the view if there is a view to change to begin with
                this.isChangingView = !!this.currentView;

                // only destroy the view if we don't want to preventDestroy and the view is different
                this._shouldDestroyView = !preventDestroy && isDifferentView && typeof this.currentView != "undefined";

                if (this._shouldDestroyView && this.transitions[showOptions.transition] )
                    this.swap(view, this.transitions[showOptions.transition] );

                // show the view if the view is different or if you want to re-show the view
                else if(isDifferentView || forceShow)
                    this.open(view);


                return this;
            },

            open: function(view) {

                // We need to listen for if a view is destroyed
                // in a way other than through the region.
                // If this happens we need to remove the reference
                // to the currentView since once a view has been destroyed
                // we can not reuse it.

                //view.once('destroy', _.bind(this.empty, this));

                view.render();
                this.onBeforeViewShow(view);
                this.attachHtml(view);
                this.currentView = view;
                this.onViewShow(view);

                return this;

            },

            swap: function(view, transitionMethod) {

                var self  =this;

                //wait for the view to be ready before doing the transition

                view.render();
                this.attachSwapHtml(view);
                this.onBeforeViewShow(view);

                if (_.isFunction(this.currentView.triggerMethod)) {
                    this.currentView.triggerMethod('disable');
                } else {
                    this.triggerMethod.call(this.currentView, 'disable');
                }

                this.triggerMethod('before:swap', this.currentView, view);

                transitionMethod.call(self, self.currentView, view, function(){
                    self.transitionEnd(view);
                });

            },



            attachSwapHtml: function(view){
                this.el.appendChild(view.el);
            },

            transitionEnd: function(view){

                if (this.currentView.destroy && !this.currentView.isDestroyed) {
                    this.currentView.destroy();
                } else if (this.currentView.remove) {
                    this.currentView.remove();
                }

                this.currentView = view;
                this.onViewShow(view);

            },

            onBeforeViewShow: function(view){

                this.triggerMethod('before:show', view);

                if (_.isFunction(view.triggerMethod)) {
                    view.triggerMethod('before:show');
                } else {
                    this.triggerMethod.call(view, 'before:show');
                }

                if( view.onBeforeShow ){
                    view.onBeforeShow(view);
                }

            },

            onViewShow: function(view){

                this.triggerMethod('show', view);

                if (_.isFunction(view.triggerMethod)) {
                    view.triggerMethod('show');
                } else {
                    this.triggerMethod.call(view, 'show');
                }

            }

        });

        return Transition;

    });




