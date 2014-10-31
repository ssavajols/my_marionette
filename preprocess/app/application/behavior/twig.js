/**
 *
 */
define('application/behavior/twig',
    [
        "system/core/ma_behavior"
    ],
    function(MA_behavior){

        var Behavior = MA_behavior.extend({

            initialize: function(){
                if( typeof this.view.template === "string"){
                    this.view.template = Templates[this.view.template];
                }
                this.view.render = this._renderTemplate;
            },

            /**
             * Render template for twig engine
             * @returns {Behavior}
             * @private
             */
            _renderTemplate: function() {
                var template = this.getTemplate();

                // Allow template-less item views
                if (template === false) {
                    return;
                }


                if (!template) {
                    throw new Marionette.Error({
                        name: 'UndefinedTemplateError',
                        message: 'Cannot render the template since it is null or undefined.'
                    });
                }

                // Add in entity data and template helpers
                var data = this.serializeData();
                data = this.mixinTemplateHelpers(data);

                // Render and add to el
                var html = template.render(data);
                this.attachElContent(html);

                return this;
            }

        });

        return Behavior;
    });