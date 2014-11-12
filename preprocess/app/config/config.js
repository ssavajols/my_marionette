/**
 * Project configuration
 *
 * To override options by meta tags in HTML document,
 * Use the meta tags below :
 *
 * Ex:
 *  <meta name="app.config.urlPushState" content="false" />
 *  <meta name="app.config.number" content="2.2" />
 *  <meta name="app.config.string" content="This is string" />
 *  <meta name="app.config.boolean_false" content="false" />
 *  <meta name="app.config.boolean_true" content="true" />
 *
 * Options not present will be added, options already set here will be overrided.
 * Values will be converted to there detected seems like value type
 *
 * Base URL will be overrided by base HTML tag href.
 * Do not use meta tag override to set base_url option.
 *
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