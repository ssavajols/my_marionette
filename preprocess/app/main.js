define('main',
    [
        "application/application_initializer",
        "config/config",

        // Modules
        "application/module/code_route/code_route",
        "application/module/module_sample/module_sample"
    ],
    function(APP, config) {

        APP.start(config);

    });
