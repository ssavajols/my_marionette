/**
 * Main file
 */
define('main',
    [
        "system/application_initializer",

        // Components

        // Modules
        "bundles/code_route/code_route"
    ],
    function(APP) {

        APP.start();

    });
