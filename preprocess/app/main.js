/**
 * Main file
 */
define('main',
    [
        "system/application_initializer",

        // Components

        // Modules
        "application/module/code_route/code_route"
    ],
    function(APP) {

        APP.start();

    });
