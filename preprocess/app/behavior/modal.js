/**
 * Modal behavior
 *
 * View methods :
 *      onBeforeCloseModal
 *      onBeforeOpenModal
 *      onAfterCloseModal
 *      onAfterOpenModal
 */
define('behavior/modal',
    [
        "config/config",
        "core/marionette.my.behavior"
    ],
    function(config){

        var Behavior = Marionette[config.namespace].Behavior.extend({

            events: {
                "click .close-modal": "closeModal",
                "click .background-layer": "closeModal"
            },

            initialize: function(){

               Marionette[config.namespace].messageBus[config.globalChannelName].commands.setHandler('modal:open', this.openModal);

                Marionette[config.namespace].Behavior.prototype.initialize.apply(this, arguments);
            },

            openModal: function(event){

                this.triggerViewMethod("onBeforeOpenModal", arguments);

                Marionette[config.namespace].messageBus[config.globalChannelName].commands.execute("fadeIn", "modal", _.bind(function(){this.triggerViewMethod("onAfterOpenModal", arguments);}, this, event));
            },

            closeModal: function(event){

                this.triggerViewMethod("onBeforeCloseModal", arguments);

                Marionette[config.namespace].messageBus[config.globalChannelName].commands.execute("fadeIn", "modal", _.bind(function(){this.triggerViewMethod("onAfterCloseModal", arguments);}, this, event));
            }
        });

        return Behavior;
    });