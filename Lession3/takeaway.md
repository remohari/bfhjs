# EVAL
Mit eval kann ein String in Code convertiert. Dies kann zum Beispiel gebraucht werden um andere JS zu importieren. 

```javascript
eval("var bla = 12;");
console.log(bla); //12
```

# IIFE
Alles was nicht in einer Funktion definiert ist, ist im globalen scope

Lösung: IIFE Immediately-invoked function expression
Da JS pro Function einen eigenen Scope öffnet, sind Variablen in der Funktion von aussen geschützt.

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

# Module

Dies gibt es bereits in diversen Libs. Unter anderem auch bei NodeJS.

Hier eine Beispiel-Implementierung.

```javascript
function require(name) {
    var code = new Function("exports", readFile(name));
    var exports = {};
    code(exports);
    return exports;
};

function readFile(name) {
    var req = new XMLHttpRequest();
    req.overrideMimeType("text/javascript");

    //Request wird synchron abgesendet! Nur fürs Testen!!!
    req.open("GET", name + ".js", false);
    req.send(null);
    //cache hinzufügen, damit es max 1 mal geladen wird
    return req.responseText;
}
```
Hier ein Beispiel, eines Moduels

```javascript
var i = 0;
exports.get = function get() {
    return i;
};

exports.increment = function increment() {
    return ++i;
};
```

Und so wird es gebraucht: 

```javascript
var counter = require("counterService");

counter.increment();
counter.get();
counter.increment();
console.log(counter.get());
```

