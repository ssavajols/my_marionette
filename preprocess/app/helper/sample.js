/**
 * Helpers for application
 */
define('helper/sample', function(){

    var helper = {
        alert: function(){
            _.each(arguments, function(message){
                alert(message);
            });
        }
    };

    return helper;
});