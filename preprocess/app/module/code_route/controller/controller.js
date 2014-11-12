define('module/code_route/controller/controller',
    [
        "module/code_route/view/layout",
        "module/code_route/view/start_view",
        "module/code_route/view/end_view",
        "module/code_route/view/question_view",

        "module/code_route/model/i18n_model"
    ],
    function(LayoutView, StartView, EndView, QuestionView, I18nModel){

        var controller;
        controller = Marionette.Controller.extend({

            timer: {},

            layout: null,

            initialize: function () {
                Marionette.My.messageBus.global.vent.on('btnStart', _.bind(this.hideModal, this));
                Marionette.My.messageBus.global.vent.on('end', _.bind(this.questionEnd, this));
            },

            index: function () {

                this.layout = new LayoutView();

                Marionette.My.messageBus.global.commands.execute('setView', this.layout, 'content', {transition: 'fade'});

                this.i18nModel = new I18nModel();

                this.i18nModel.fetch().then(_.bind(function () {
                    clearInterval(this.timer.interval);
                    this.layout.setView(new StartView({model: this.i18nModel}), 'content', {transition: "fade"});
                }, this));

            },

            hideModal: function () {

                this.layout.setView(new QuestionView(), 'content', {transition: 'fade'});

                this.currentTime = 0;

                clearInterval(this.timer.interval);
                this.timer.interval = setInterval(_.bind(function () {
                    this.currentTime++;
                    Marionette.My.messageBus.global.vent.trigger('updateTimer', 100/30*this.currentTime);
                    if( this.currentTime > 30 ){
                        this.questionEnd();
                    }
                }, this), 1000);

            },

            questionEnd: function (event) {
                clearInterval(this.timer.interval);
                this.layout.setView(new EndView({isValid: event && event.isValid || false, model: this.i18nModel}), 'content', {transition: 'fade'});
            }

        });

    return controller;


});