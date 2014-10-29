/**
 * Helpers for application
 */
define('application/helper/sample', function(){

    var helper = {
        alert: function(){
            _.each(arguments, function(message){
                alert(message);
            });
        }
    };

    return helper;
});