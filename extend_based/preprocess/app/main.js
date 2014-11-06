/**
 * Main file
 */
define('main',
    [
        "system/application_initializer",

        // Components
        "application/component/sample/sample",

        // Modules
        "application/module/code_route/code_route",
        "application/module/module_sample/module_sample",
        "application/module/module_pixi/module_pixi"
    ],
    function(APP) {

        APP.start();

    });