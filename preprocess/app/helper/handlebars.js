define('helper/handlebars', function(){

    Handlebars.registerHelper('uppercase', function(text) {
        return text.toUpperCase();
    });

});