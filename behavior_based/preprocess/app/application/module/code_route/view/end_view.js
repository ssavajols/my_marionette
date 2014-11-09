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

            events: {
                "click .icon-facebook": "shareFacebook"
            },

            initialize: function(options){

                this.isValid = options.isValid;

                this.serializeData = _.bind(function(){
                    return {result: this[options.isValid ? "getOkText" : "getKoText"](), validClass: options.isValid ? "icon-ok-circled" : "icon-cancel-circled"};
                }, this);
            },

            getOkText: function(){

                return this.model.get("resultOkText")[_.random(0, this.model.get('resultOkText').length-1)];
            },

            getKoText: function(){

                return this.model.get("resultKoText")[_.random(0, this.model.get('resultKoText').length-1)];
            },

            shareFacebook: function(event){

                event.preventDefault();

                var fbShareOptions = {
                    method:"feed",
                    picture:"http://www.potiondevie.fr/wp-content/uploads/2013/01/coderoute.jpg",
                    name: this.isValid ? "J'ai réussi le test, et toi ?" : "Je n'ai pas réussi le test...",
                    caption: "Un test de 1 question.",
                    description: "Etes vous prêt à relever le défi ?",
                    link: window.location.href
                };

                FB.ui(fbShareOptions, $.noop);
            }
        });

        return EndView;

    });