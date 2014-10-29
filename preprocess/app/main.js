define('main',
    [
        "system/application_initializer",

        // Modules
        "application/module/code_route/code_route",
        "application/module/module_sample/module_sample"
    ],
    function(APP) {

        APP.start();

    });
