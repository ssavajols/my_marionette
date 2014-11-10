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
             *
             * To externally set base_url, by PHP DOCUMENT_ROOT for example,
             * Use the HTML tag into document HEAD below :
             *
             * <base href="/perso/my_marionette/public/" />
             *
             * If empty href attibute, the config base_url is used instead.
             *
             */
            base_url: "",

            /**
             * Global application selector
             */
            container: "#container",

            /**
             * Global channel name for backbone radio
             *
             * Accessed by Marionette.My.messageBus.global
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
             * To externally force pushState for supported browsers,
             * Use the meta tag into document HEAD below :
             *
             * <meta name="pushstate" content="false" />
             *
             * If not set Modernizr is used. If no Modernizr, pushState is disabled
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
            urlPushState: Modernizr && Modernizr.history
        };
    });