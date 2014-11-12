define('module/code_route/model/i18n_model',
    [
    ],
    function(){

        var I18nModel = Backbone.Model.extend({
            url: "contrib/i18n.json"
        });

        return I18nModel;
    });