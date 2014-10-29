define('application/module/code_route/view/end_view',
    [
        "application/core/ma_item_view"
    ],
    function(MA_itemView){


        var EndView = MA_itemView.extend({
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