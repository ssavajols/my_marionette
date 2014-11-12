define('module/code_route/view/question_view',
    [
        "module/code_route/collection/question_collection",
        'behavior/handlebars'
    ],
    function(QuestionCollection, BehaviorHandlebars){


        var QuestionView;
        QuestionView = Marionette.ItemView.extend({
            template: "module/code_route/view/template/question",
            ui: {
                "form": ".response-form",
                "image": ".question-image"
            },
            events: {
                "submit @ui.form": "submitForm",
                "mousedown @ui.image": "hideForm",
                "mouseup @ui.image": "showForm",
                "touchstart @ui.image": "hideForm",
                "touchend @ui.image": "showForm"
            },

            behaviors: {
                handlebars: {
                    behaviorClass: BehaviorHandlebars
                }
            },

            collection: new QuestionCollection(),

            initialize: function () {

                this.collection.fetch().then(_.bind(function () {
                    this.setQuestion();
                }, this));

                Marionette.My.messageBus.global.vent.on('updateTimer', _.bind(this.updateTime, this));

                Marionette.ItemView.prototype.initialize.apply(this, arguments);
            },

            updateTime: function (t) {
                this.$el.find('.progress').width(t + "%");
            },

            hideForm: function (event) {
                if( event.currentTarget.isHidded ){
                    this.showForm();
                    event.currentTarget.isHidded = false;
                }else{
                    TweenLite.to(this.$el.find('form'), 0.25, {opacity: 0.1});
                    event.currentTarget.isHidded = true;
                }
            },

            showForm: function (event) {

                if( event && event.currentTarget.isHidded ){
                    event.currentTarget.isHidded = false;
                }
                TweenLite.to(this.$el.find('form'), 0.25, {opacity: 1});
            },

            setQuestion: function () {

                var letter = "abcdefghijklmnopqrstuvwxyz".split('');

                var model = this.collection.at(_.random(0, this.collection.length - 1));

                model.attributes.responses = _.shuffle(model.attributes.responses);

                _.each(model.attributes.responses, function(r, i){
                    model.attributes.responses[i].letter = letter[i];
                });

                this.model = model;

                this.render();
            },

            render: function () {

                if (this.model) {
                    Marionette.ItemView.prototype.render.apply(this, arguments);
                }

            },

            onAfterRender: function () {
                TweenLite.fromTo(this.$el.find(".response-form"), 1, {y: window.innerHeight}, {y: 0, ease: Cubic.easeOut});
            },


            submitForm: function (event) {
                event.preventDefault();

                this.checkResponse(event.currentTarget);
            },

            checkResponse: function (form) {

                var $form = this.$(form);

                var isValid = true;
                var responses = this.model.get('responses');

                $form.find("[name=responses]").each(function (index, el) {
                    var $el = $(el);
                    var value = $el.val();

                    for (var i = 0, j = responses.length; i < j; i++) {

                        if (value != responses[i].value) {
                            continue;
                        }

                        if ($el.is(':checked') && !responses[i].valid) {
                            isValid = false;
                        } else if ($el.is(':not(:checked)') && responses[i].valid) {
                            isValid = false;
                        }
                    }

                });

                Marionette.My.messageBus.global.vent.trigger('end', {isValid: isValid});
            }
        });

        return QuestionView;

    });