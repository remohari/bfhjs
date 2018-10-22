eval("var bla = 12;");
console.log(bla); //12

function require(name) {
    var code = new Function("exports", readFile(name));
    var exports = {};
    code(exports);
    return exports;
};

function readFile(name) {
    var req = new XMLHttpRequest();
    req.overrideMimeType("text/javascript");
    req.open("GET", name + ".js", false);
    req.send(null);
    //cache hinzufügen, damit es max 1 mal geladen wird
    return req.responseText;
}


//In Node JS ist require bereits implementiert

var counter = require("counterService");

counter.increment();
counter.get();
counter.increment();
console.log(counter.get());