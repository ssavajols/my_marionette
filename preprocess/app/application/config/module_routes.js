define('application/config/module_routes', function(){

    /**
     * Modules routes
     *
     * Same module could be accessed by multiple routes
     *
     * ex:
     *  Module module_sample :
     *      base_url/test
     *      base_url/sample
     */
    var module_routes = {

        "code_route": ["code_route", "page", "abc"],

        "module_sample": ["test", "sample"]
    };

    return module_routes;
});