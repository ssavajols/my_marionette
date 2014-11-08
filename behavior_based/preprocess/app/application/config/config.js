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

            /*
            * Namespace for core extended classes container
            * ex:
            *   Marionette.My.ItemView
            *   Marionette.My.Behavior
             */
            namespace: "My",

            /**
             * Base url for backbone routes
             */
            base_url: window.BASE_URL || "",

            /**
             * Global application selector
             */
            container: "#container",

            /**
             * Global channel name for backbone radio
             */
            globalChannelName: "global",

            /**
             * Main module to load
             *
             * If no valid route, this module will be used by default
             */
            mainModule: "code_route",

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
            urlPushState: typeof window.enablePushState !== "undefined" ? window.enablePushState : Modernizr && Modernizr.history
        };
    });