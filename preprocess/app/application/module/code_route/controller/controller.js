define('application/module/code_route/controller/controller',
    [
        "system/core/ma_controller",

        "application/module/code_route/view/layout",
        "application/module/code_route/view/start_view",
        "application/module/code_route/view/end_view",
        "application/module/code_route/view/question_view",

        "application/module/code_route/model/i18n_model"
    ],
    function(MA_controller, LayoutView, StartView, EndView, QuestionView, I18nModel){

    var controller = MA_controller.extend({

        timer: {},

        layout: null,

        initialize: function(){
            this.channel.vent.on('btnStart', _.bind(this.hideModal, this));
            this.channel.vent.on('end', _.bind(this.questionEnd, this));
        },

        index: function(){

            this.layout = new LayoutView();

            this.channel.commands.execute('setView', this.layout, 'content');

            this.i18nModel = new I18nModel();

            this.i18nModel.fetch().then(_.bind(function(){
                clearTimeout(this.timer.started);
                this.layout.setView(new StartView({model: this.i18nModel}), 'footer', true);
            }, this));

        },

        hideModal: function(){
            this.layout.removeView('footer', true, _.bind(function(){

                this.layout.setView(new QuestionView(),'content', true);

                clearTimeout(this.timer.started);
                this.timer.started = setTimeout(_.bind(this.questionEnd, this), 1000*60);

            }, this));

        },

        questionEnd: function(event){
            clearTimeout(this.timer.started);
            this.layout.setView(new EndView({isValid: event && event.isValid || false, model: this.i18nModel}), 'footer', true, _.bind(function(){
                this.layout.removeView('content', true);
            }, this));
        }

    });

    return controller;


});