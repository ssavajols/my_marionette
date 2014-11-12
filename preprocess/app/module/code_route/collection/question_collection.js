define('module/code_route/collection/question_collection',
    [
        "module/code_route/model/question_model"
    ],
    function(QuestionModel){

        var QuestionCollection = Backbone.Collection.extend({
            model:QuestionModel,
            url: "contrib/questions.json"
        });

        return QuestionCollection;
    });