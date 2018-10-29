# ECMAScript 6
ECMAScript 6 basiert auf ES5 und benutzt auch viele dieser Funktionen.

```javascript
var message = `${student.name} is a student at ${student.university}.
${student.name} was born in ${getYear() - student.age}.`;
```

## Let (Variablen Deklaration)
let ist Block-Scoped. Nicht mischen im Projekt, entweder let oder var.


## Arrow functions
Das this ist unterschiedlich. Bestehende Funktionen können nicht einfach überschrieben werden. 

```javascript
var alice = {
    name: "Alice",
    friends: ["Bob", "Eve"],
    sayHi: function() {
        this.friends.forEach(friend => {
        console.log(this.name + " says hi to " + friend);
        });
    }
};
```

## Klassen
Klassen sind keine Klassen, es ist die gewohnte Prototype-Vererbung. Z.B. können keine prviaten Instanz-Variablen gesetzt werden.

Mit dem Keyword *extends* kann einfach die Prototype-Vererbung gemacht werden.

## Module
*export* und *import* gibt es als neue Key-Words. Jedoch ist das in den Browsern noch nicht wirklich brauchbar. Ähnlich wie IFIS.

Import und Export geht nur, wenn es mit type="module" geladen wird im HTML. Module werden Async geladen, sobald das DOM vorhanden ist.

## Promises
Javascript ist SingleThread.

```javascript
// computeAsync() returns a promise
computeAsync("Foo")
    .then(result => toMorse(result)) //=> macht zusätzlich ein Return
    .then(result => doStuff(result)) // Arbeitet mit dem Rückgabewert von toMorse(result)
    .then(result => { 
        doStuf();
        return resutl;              //Bei => Funciton mit {} muss ein Return geschreiben werden
    })
    .catch(error => { /* Handle error 2*/ })
    .then(result => { /* Process result */ })


function computeAsync() {
    return new Promise(function(resolve, reject) {
    // ... (Promise is pending)
        resolve(result);
        // or
        reject(error);
    });
}
```

Then gibt ein Promise zurück. In einem Fehlerfall werden alle Then übersprungen bis zum nächsten Catch. Anschliessend werden wieder alle thens aufgerufen, insofren alles erfolgreich war.

Bei Verschachtelungen geht das Catch nicht weiter nach "aussen".

```javascript
// ’Wait’ until all promises are fulfilled or one rejected
Promise.all([doAsync("A"), doAsync("B"), doAsync2()])
.then(results => { /* ... */ })
.catch(error => { /* ... */ });
// ’Wait’ until the first promise is fulfilled or rejected
Promise.race([doAsync("A"), doAsync("B"), doAsync2()])
.then(result => { /* ... */ })
.catch(error => { /* ... */ });
```
