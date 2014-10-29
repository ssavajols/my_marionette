define('application/module/code_route/controller/controller',
    [
        "application/module/code_route/view/layout",
        "application/module/code_route/view/start_view",
        "application/module/code_route/view/end_view",
        "application/module/code_route/view/question_view",

        "application/module/code_route/model/i18n_model"
    ],
    function(LayoutView, StartView, EndView, QuestionView, I18nModel){

    var moduleLayout = new LayoutView();

    var controller = Backbone.Marionette.Controller.extend({
        channel: Backbone.Wreqr.radio.channel('global'),

        timer: {},

        initialize: function(){

            this.channel.commands.execute('setView', moduleLayout, 'content');
            this.channel.vent.on('btnStart', _.bind(this.hideModal, this));
            this.channel.vent.on('end', _.bind(this.questionEnd, this));
        },

        index: function(){

            this.i18nModel = new I18nModel();

            this.i18nModel.fetch().then(_.bind(function(){
                clearTimeout(this.timer.started);
                moduleLayout.setView(new StartView({model: this.i18nModel}), 'footer', true);
            }, this));

        },

        hideModal: function(){
            moduleLayout.removeView('footer', true, _.bind(function(){

                moduleLayout.setView(new QuestionView(),'content', true);

                clearTimeout(this.timer.started);
                this.timer.started = setTimeout(_.bind(this.questionEnd, this), 1000*60);

            }, this));

        },

        questionEnd: function(event){
            clearTimeout(this.timer.started);
            moduleLayout.setView(new EndView({isValid: event && event.isValid || false, model: this.i18nModel}), 'footer', true, _.bind(function(){
                moduleLayout.removeView('content', true);
            }, this));
        }

    });

    return controller;


});