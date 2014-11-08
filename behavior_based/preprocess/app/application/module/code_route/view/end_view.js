define('application/module/code_route/view/end_view',
    [
        'system/behavior/handlebars'
    ],
    function(BehaviorHandlebars){


        var EndView = Marionette.My.ItemView.extend({
            template:"application/module/code_route/view/template/result",

            className: "result",

            behaviors: {
                handlebars: {
                    behaviorClass: BehaviorHandlebars
                }
            },

            initialize: function(options){

                this.serializeData = _.bind(function(){
                    return {result: this[options.isValid ? "getOkText" : "getKoText"](), validClass: options.isValid ? "icon-ok-circled" : "icon-cancel-circled"};
                }, this);
            },

            getOkText: function(){

                return this.model.get("resultOkText")[_.random(0, this.model.get('resultOkText').length-1)];
            },

            getKoText: function(){

                return this.model.get("resultKoText")[_.random(0, this.model.get('resultKoText').length-1)];
            }
        });

        return EndView;

    });