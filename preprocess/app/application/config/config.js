/**
 * Project configuration
 */
define('application/config/config',
    function(){

        return {

            /**
             * Project name
             */
            name: "sample project",

            /**
             * Base url for backbone routes
             */
            base_url: "/perso/my_marionette/public/",

            /**
             * Global application selector
             */
            container: "#container",


            /**
             * Use routing with pushState or hash tag.
             *
             * To use with pushState, a valid rewriting is required. Use the .htaccess example below
             * to enable pushState routing.
             *
             *
             * Ex: .htacces
                     RewriteEngine on
                     # html5 pushstate (history) support:
                     <ifModule mod_rewrite.c>
                     RewriteEngine On
                     RewriteCond %{REQUEST_FILENAME} !-f
                     RewriteCond %{REQUEST_FILENAME} !-d
                     RewriteCond %{REQUEST_URI} !index
                     RewriteRule (.*) index.html [L]
                     </ifModule>
             *
             */
            urlPushState: Modernizr.history,

            /**
             * Main module to load
             *
             * If no valid route, this module will be used by default
             */
            mainModule: "code_route"
        };
    });