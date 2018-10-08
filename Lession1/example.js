"use strict";
console.log("adadsasdsf");
var bla = 10;

console.log(typeof bla);


var square = function(x) {
    return x*x
}

console.log(square(10));
//Javascript ist function scoped (Nur Funktionen machen einen neuen scope)

var alphabetString = 
		"a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;"+
		"m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;"+
        "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";
var morseArray = {}; 
alphabetString.split(";")
    .forEach(function(x){
        var arr = x.split('=');
        arr[1] && (morseArray[arr[0]] = arr[1]);
});

function charToMorse(alphaChar) {
    if(alphaChar in morseArray){
        return morseArray[alphaChar];
    }
    return "";    
}


function convertToMorse(alphabetString) {
    var result = "";
    alphabetString.toLowerCase().split("").forEach(element => {
        result += charToMorse(element);
    });
    return result;
}

console.log(convertToMorse("aaaaa aaaaa"));



