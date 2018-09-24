"use strict";

var bob = {
    Name: "Bob",
    Age: 11
}

bob.hairColor = "black";

Person.prototype.speak = function (phrase) {
        console.log(this.name + "says" + phrase);
    } 

//Ein initiale Abfüllung als Objekt
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.speak = function(phrase) {
        console.log(this.name + "says" + phrase);
    }
}






Char(value, string) {
    
    write: function(text, to){

    }
    render: "";
}


