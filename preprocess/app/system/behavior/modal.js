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
        "system/core/ma_behavior"
    ],
    function(MA_behavior){

        var Behavior = MA_behavior.extend({

            events: {
                "click .close-modal": "closeModal",
                "click .background-layer": "closeModal"
            },

            initialize: function(){

               this.channel.commands.setHandler('modal:open', this.openModal);
            },

            openModal: function(event){

                this.triggerViewMethod("onBeforeOpenModal", arguments);

                this.channel.commands.execute("fadeIn", "modal", _.bind(function(){this.triggerViewMethod("onAfterOpenModal", arguments);}, this, event));
            },

            closeModal: function(event){

                this.triggerViewMethod("onBeforeCloseModal", arguments);

                this.channel.commands.execute("fadeIn", "modal", _.bind(function(){this.triggerViewMethod("onAfterCloseModal", arguments);}, this, event));
            }
        });

        return Behavior;
    });