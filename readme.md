# MY MARIONETTE

Backbone marionette boilerplate

Documentation here.

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
