# APPLICATION CONFIG FILE

##### name :

Application name.

##### base_url :

Base url for route

##### container :

Global container where the application layout is inserted.

##### urlPushState :

Use routing with pushState or hash tag.<br />

To use with pushState, a valid rewriting is required. Use the .htaccess example below<br />
to enable pushState routing.<br />
Ex: .htacces

    RewriteEngine on
    # html5 pushstate (history) support:
    <ifModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} !index
    RewriteRule (.*) index.html [L]
    </ifModule><br />


##### mainModule :

Main module started on root application or invalid route.

##### globalChannelName :

This is the global channel name where all core classes subscribes.
