"use strict";

var charles = {
    Name: "Bob",
    Age: 11
}

charles.hairColor = "black";

//Ein initiale Abfüllung als Objekt
function Person(name, age) {
    this.name = name;
    this.age = age;
    //Jedes Objekt hat die eigene Methode "Überschreiben"
    /*this.speak = function(phrase) {
        console.log(this.name + "says" + phrase);
    }*/
}

Person.prototype.speak = function (phrase) {
    //This geht im Proto nicht.
    console.log(this.name + " says " + phrase);
} 

var pers1 = new Person("Bob", 12);
console.log(pers1.speak( "asdf"));


function Student(name, age, university) {
    Person.call(this, name, age);
    this.university = university;
}

//Vererbung in JS
//Student.prototype.__proto__ = Person.prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


//Call parent Phrase
Student.prototype.speak = function(phrase) {
    console.log("-----------------");
    this.__proto__.__proto__.speak.call(this, phrase)

}
//Oder so
Student.prototype._speak = Student.prototype.speak;
Student.prototype.speak = function(phrase) {
    console.log("-----------------");
    this._speak(phrase);
}



///This with functions

//speak("blabla");
var bob = new Person("Bob", 12);
var alice = new Person("Alice", 12);
var talk = bob.speak;
bob.speak("blabl");
//1 Param wird als this gesetzt
talk.call(bob, "blabla");                   //this -> bob
//talk();                                   //ERROR
var talk2 = talk.bind(alice);
talk2("asdf");                              //This -> Alice



// Exercise 2 - not finished yet
function Char(value, string) {
        this.value =  value;
        this.string = string;
}

function Font(name, chars) 
{
    this.name = name;
    //So werden Dinge, wie z.B. toString nicht vererbt
    this.alphabet = Object.create(null);
    chars.forEach(item => {
        this.alphabet[item.value] = item;
    });
}

Font.prototype.render = function(text) {
    var line; 
    //text.forEach
}

Font.prototype.write = function(text, to) {
    //Default Argument
    to = to || console.log(text);
}


// Exercise 3 

function Char (value) {
    this.value = value;
    this.getValue = function() {
        return this.value;
    };
}

function SingelLineChar (value, string) {
    Char.call(value);
    this.string = string;
    this.getString() = function () {
        return this.string;
    };
}


function MultiLineChar (value, lines) {
    Char.call(value);
    this.lines = lines;
    this.getLines = function (index) {

    };
}


