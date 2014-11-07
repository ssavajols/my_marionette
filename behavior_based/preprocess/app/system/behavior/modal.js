/**
 * Modal behavior
 *
 * View methods :
 *      onBeforeCloseModal
 *      onBeforeOpenModal
 *      onAfterCloseModal
 *      onAfterOpenModal
 */
define('system/behavior/modal',
    [
    ],
    function(MA_behavior){

        var Behavior = Backbone.Marionette.My.Behavior.extend({

            events: {
                "click .close-modal": "closeModal",
                "click .background-layer": "closeModal"
            },

            initialize: function(){

               Backbone.Marionette.My.messageBus.global.commands.setHandler('modal:open', this.openModal);

                Backbone.Marionette.My.Behavior.prototype.initialize.apply(this, arguments);
            },

            openModal: function(event){

                this.triggerViewMethod("onBeforeOpenModal", arguments);

                Backbone.Marionette.My.messageBus.global.commands.execute("fadeIn", "modal", _.bind(function(){this.triggerViewMethod("onAfterOpenModal", arguments);}, this, event));
            },

            closeModal: function(event){

                this.triggerViewMethod("onBeforeCloseModal", arguments);

                Backbone.Marionette.My.messageBus.global.commands.execute("fadeIn", "modal", _.bind(function(){this.triggerViewMethod("onAfterCloseModal", arguments);}, this, event));
            }
        });

        return Behavior;
    });