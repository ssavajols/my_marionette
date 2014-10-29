# MODULE ROUTES

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