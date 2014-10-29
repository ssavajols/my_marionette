# MY MARIONETTE

Backbone marionette boilerplate

### APPLICATION CONFIG FILE

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

### MODULE ROUTES

Module routes files in application config, contain base routing for application modules.

Routes to modules could be localized or rename without modifying the module name or folder.

```javascript
var module_routes = {

    "code_route": ["code_route", "page", "abc"],

    "module_sample": ["test", "sample"],

    "module_pixi": ["pixi"]
};
```

Ex:
```
    application/module/module_sample could be accessed by the routes below :
    
    /test
    or
    /sample
````

### DIRECTORY TREE
```
├── application
│   ├── behavior                             // Application behavior
│   ├── component                            // Application component
│   │   └── sample                           // Sample component
│   │       ├── sample.js                    // Component entry point
│   │       └── view                         // Component view
│   │           └── sample_layout.js
│   ├── config                               // Application configuration
│   │   ├── config.js                        // Config file
│   │   └── module_routes.js                 // Module routes files
│   ├── core                                 // Override core classes
│   │   └── my_item_view.js
│   ├── helper                               // Application helpers
│   │   └── sample.js
│   └── module                               // Application modules
│       ├── code_route
│       │   ├── code_route.js
│       │   ├── collection
│       │   │   └── question_collection.js
│       │   ├── controller
│       │   │   └── controller.js
│       │   ├── model
│       │   │   ├── i18n_model.js
│       │   │   └── question_model.js
│       │   ├── router
│       │   │   └── router.js
│       │   └── view
│       │       ├── end_view.js
│       │       ├── layout.js
│       │       ├── question_view.js
│       │       └── start_view.js
│       ├── module_pixi
│       │   ├── controller
│       │   │   └── controller.js
│       │   ├── module_pixi.js
│       │   ├── router
│       │   │   └── router.js
│       │   └── view
│       │       └── pixi_composite_view.js
│       └── module_sample
│           ├── controller
│           │   └── controller.js
│           ├── module_sample.js
│           ├── router
│           │   └── router.js
│           └── view
│               └── sample_view.js
├── main.js                                     // Application launcher
└── system                                      // Core classes
    ├── application.js                          // Application object
    ├── application_controller.js               // Application generic controller
    ├── application_initializer.js              // Application initialize
    ├── application_layout.js                   // Application global layout
    ├── application_router.js                   // Application class route
    ├── behavior                                // Core behavior
    │   └── modal.js
    └── core                                    // Core classes
        ├── ma_app_router.js
        ├── ma_behavior.js
        ├── ma_collection.js
        ├── ma_collection_view.js
        ├── ma_composite_view.js
        ├── ma_controller.js
        ├── ma_item_view.js
        ├── ma_layout.js
        ├── ma_model.js
        ├── ma_module.js
        ├── ma_router.js
        └── ma_sub_router.js
```
