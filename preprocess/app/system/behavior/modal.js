define('system/behavior/modal',
    [
        "system/core/ma_behavior"
    ],
    function(MA_behavior){

        var Behavior = MA_behavior.extend({

            events: {
                "click .close-modal": "closeModal"
            },

            initialize: function(){

               this.channel.commands.setHandler('modal:open', this.openModal);
            },

            openModal: function(event){

                this.onBeforeOpenModal(event);

                this.channel.commands.execute("fadeIn", "modal", _.bind(this.onAfterOpenModal, this, event));
            },

            closeModal: function(event){

                this.onBeforeCloseModal(event);

                this.channel.commands.execute("fadeIn", "modal", _.bind(this.onAfterCloseModal, this, event));
            },

            onBeforeOpenModal: $.noop,
            onBeforeCloseModal: $.noop,
            onAfterOpenModal: $.noop,
            onAfterCloseModal: $.noop
        });

        return Behavior;
    });