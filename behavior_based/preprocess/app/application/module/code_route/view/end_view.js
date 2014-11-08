define('application/module/code_route/view/end_view',
    [
    ],
    function(){


        var EndView = Marionette.My.ItemView.extend({
            template:"#result",

            initialize: function(options){

                this.serializeData = _.bind(function(){
                    return {result: this[options.isValid ? "getOkText" : "getKoText"]()};
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