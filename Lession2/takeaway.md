# Objekte

Objekte sind einfache behälter von Properties. Properties können Werte oder Funktionen sein. Sie können immer noch verändert werden. 

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.speak = function(phrase) {
        console.log(this.name + "says" + phrase);
    }
}
```

Mit folgender Funktion wird ein Objekt erstellt, ohne irgendwelche Methoden, wie z.B. toString();

```javascript
this.alphabet = Object.create(null);
````

# Prototype 
Mit der Variante von oben wird pro Instanz eine Funktion erzeugt.

Mit dieser Variante wird die Funktion dem Prototype hinzugefügt. Dieser kann auch zur Laufzeit geändert werden und so bei allen Objekte von dem Konstruktor geändert werden. 
```javascript
 Person.prototype.speak = function (phrase) {                
        console.log(this.name + "says" + phrase);     
    } 
```

# Vererbung

Vererbung von Person (siehe oben) 
```javascript
function Student(name, age, university) {
    Person.call(this, name, age);
    this.university = university;
}
//Vererbung in JS (Grusig)
//Oder mit Extends
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


```


# this in JS / Funktionen
```javascript
var bob = new Person("Bob", 12);
var alice = new Person("Alice", 12);
var talk = bob.speak;
bob.speak("blabl");
talk.call(bob, "blabla");                   //this -> bob
//talk();
var talk2 = talk.bind(alice);
talk2("asdf");                              //This -> Alice
 ```