# Modules
Alles was nicht in einer Funktion definiert ist, ist im globalen scope

Lösung: IIFE Immediately-invoked function expression


```javascript
(var counterService = function() {
    var i = 0;
    function get() {
        return i;
    };

    function increment() {
        return ++i;
    };

    return {
        increment: increment,
        get: get
    };
}); ();
``` 