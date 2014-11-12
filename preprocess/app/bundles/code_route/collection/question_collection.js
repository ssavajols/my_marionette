define('bundles/code_route/collection/question_collection',
    [
        "bundles/code_route/model/question_model"
    ],
    function(QuestionModel){

        var QuestionCollection = Backbone.Collection.extend({
            model:QuestionModel,
            url: "contrib/questions.json"
        });

        return QuestionCollection;
    });