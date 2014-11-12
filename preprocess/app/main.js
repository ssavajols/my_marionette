/**
 * Main file
 */
define('main',
    [
        "system/application_initializer",

        // Components

        // Modules
        "module/code_route/code_route"
    ],
    function(APP) {

        APP.start();

    });
