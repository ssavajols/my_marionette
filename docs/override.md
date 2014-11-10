# OVERRIDE


### HOW TO OVERRIDE CORE CLASSES

To override core classes, place yours scripts into application/core. To extend core classes use the example below :

```javascript
defne('application/core/my_item_view',           // Override className
    function(){


       var ItemView =  Marionette.My.ItemView.extend({       // Place here your override methods and attributes
           override: true
       });

        return ItemView;                          // Return override class
    });
```

See core-classes [documentation](https://github.com/ssavajols/my_marionette/blob/master/docs/core-classes.md) and
[documentation](http://marionettejs.com/docs/) for methods and attributes to override.