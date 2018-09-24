# Einführung Javascript
 - Untypsiert -> Eine Variable hat einen Typen im Hintergrund, aber der Wert kann sich während dem Programm ändern
 - Function scoped (Nur Funktionen machen einen neuen Scope).
 - Hoisting -> Variablen werden zu Begin initialisiert und nicht erst beim Aufruf
   - `function g() {}`wird auch gehoisted
   - `g = function() {}`wird nicht gehoisted
- Lexical-Scope -> Funktionen können auf Variablen der "Parent-Funktion" zugreifen. Nach aussen geht es, nach innen nicht
- Closures -> Funktionen behalten den Wert, auch wenn sie ausgeführt wurden, sofern zuvor `var bla = function() {}` gemacht wurde und anschliessend `bla()`mehrfach aufgerufen wurde


# Arrays
 - forEach überspringt `undefined` Items
 - Die Funktion für forEach bekommt die Params (Item, Index). In JQuery sind diese vertauscht
 - `array['asdfasdf'] = "bla"` fügt kein Element zum Array hinzu. Es fügt das Property 'asdfadsf' zum Objekt 'array' hinzu
