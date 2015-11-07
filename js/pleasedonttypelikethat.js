function pleaseConvert() {
    "use strict";
    var input = document.getElementById("pleaseinput").value;
    var output = "";
    var i;
    for (i = 0; i < input.length; i++) {
        if (input[i] === "a") {
            output = output + "@";
        }
        if (input[i] === "A") {
            output = output + "4";
        }
        if (input[i] === "b") {
            output = output + ""; 
        }
        if (input[i] === "B") {
            output = output + "";
        if (input[i] === "c") {
            output = output + ""; 
        if (input[i] === "C") {
            output = output + "(";
        if (input[i] === "d") {
            output = output + ""; 
        if (input[i] === "D") {
            output = output + "|)";
        if (input[i] === "e") {
            output = output + ""; 
        if (input[i] === "E") {
            output = output + "3";
        if (input[i] === "f") {
            output = output + ""; 
        if (input[i] === "F") {
            output = output + "";
        if (input[i] === "g") {
            output = output + ""; 
        if (input[i] === "G") {
            output = output + "";
        if (input[i] === "h") {
            output = output + ""; 
        if (input[i] === "H") {
            output = output + "|-|";
        if (input[i] === "i") {
            output = output + ""; 
        if (input[i] === "I") {
            output = output + "1";
        if (input[i] === "j") {
            output = output + ""; 
        if (input[i] === "J") {
            output = output + "";
        if (input[i] === "k") {
            output = output + ""; 
        if (input[i] === "K") {
            output = output + "|<";
        if (input[i] === "l") {
            output = output + ""; 
        if (input[i] === "L") {
            output = output + "";
        if (input[i] === "m") {
            output = output + ""; 
        if (input[i] === "M") {
            output = output + "/\/\";
        if (input[i] === "n") {
            output = output + ""; 
        if (input[i] === "N") {
            output = output + "/\/";
        if (input[i] === "o") {
            output = output + ""; 
        if (input[i] === "O") {
            output = output + "0";
        if (input[i] === "p") {
            output = output + ""; 
        if (input[i] === "P") {
            output = output + "";
        if (input[i] === "q") {
            output = output + ""; 
        if (input[i] === "Q") {
            output = output + "";
        if (input[i] === "r") {
            output = output + ""; 
        if (input[i] === "S") {
            output = output + "$";
        if (input[i] === "t") {
            output = output + ""; 
        if (input[i] === "T") {
            output = output + "+";
        if (input[i] === "u") {
            output = output + ""; 
        if (input[i] === "U") {
            output = output + "";
        if (input[i] === "v") {
            output = output + ""; 
        if (input[i] === "V") {
            output = output + "";
        if (input[i] === "w") {
            output = output + ""; 
        if (input[i] === "W") {
            output = output + "\/\/";
        if (input[i] === "x") {
            output = output + ""; 
        if (input[i] === "X") {
            output = output + "";
        if (input[i] === "y") {
            output = output + ""; 
        if (input[i] === "Y") {
            output = output + "&yen;";
        if (input[i] === "z") {
            output = output + ""; 
        if (input[i] === "Z") {
            output = output + "";
        
        }
            
    }
    document.getElementById("pleaseoutput").innerHTML = output;
}
