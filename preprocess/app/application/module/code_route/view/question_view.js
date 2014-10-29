define('application/module/code_route/view/question_view',
    [
        "application/core/ma_item_view",
        "application/module/code_route/collection/question_collection"
    ],
    function(MA_itemView, QuestionCollection){


        var QuestionView = MA_itemView.extend({
            template:"#question",
            ui: {
                "form": ".response-form"
            },
            events: {
                "submit @ui.form": "submitForm"
            },
            collection: new QuestionCollection(),

            initialize: function(){

                this.collection.fetch().then(_.bind(function(){
                    this.setQuestion();

                }, this));

                this.constructor.__super__.initialize.apply(this, arguments);
            },

            setQuestion: function(){

                this.model = this.collection.at(_.random(0, this.collection.length-1));

                this.render();
            },

            render: function(){

                if( this.model ){
                    this.constructor.__super__.render.apply(this, arguments);
                }

                this.onAfterRender();
            },

            onAfterRender: function(){
                TweenLite.fromTo(this.$el, 0.5, {display:"block", opacity:0}, {opacity:1});
                TweenLite.fromTo(this.$el.find(".response-form"), 1, {y:window.innerHeight}, {y:0, ease: Cubic.easeOut});
            },


            submitForm: function(event){
                event.preventDefault();

                this.checkResponse(event.currentTarget);
            },

            checkResponse: function(form){

                var $form = this.$(form);

                var isValid = true;
                var responses = this.model.get('responses');

                $form.find("[name=responses]").each(function(index, el){
                    var $el = $(el);
                    var value = $el.val();

                    for(var i = 0, j = responses.length; i<j; i++){

                        if( value != responses[i].value){
                            continue;
                        }

                        if( $el.is(':checked') && !responses[i].valid){
                            isValid = false;
                        }else if( $el.is(':not(:checked)') && responses[i].valid ){
                            isValid = false;
                        }
                    }

                });

                this.channel.vent.trigger('end', {isValid: isValid});
            }
        });

        return QuestionView;

    });