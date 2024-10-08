// chap string methods
// Q1

var firstNamme = prompt("Enter your first Name");
var lastName = prompt("Enter your last Name");
var fullName = firstNamme + lastName;
console.log(fullName);

// Q2

var phnModel = prompt("Enter your fav phone model");
document.write(`My favorite phone model: ${phnModel} <br> Length of sring: ${phnModel.length}`);

// Q3-5

var str = "Pakistani";
document.write("String: ", str, "<br>");
var res = str.indexOf("n");
document.write("Index of `n`: ", res, "<br>");

var str2 = "hello world";
document.write("String: ", str2, "<br>");
var res2 = str2.lastIndexOf("l");
document.write("Index of `l`: ", res2, "<br>");

var str3 = "Pakistani";
document.write("String: ", str3, "<br>");
var res3 = str3.charAt(3);
document.write("Index of `3`: ", res3, "<br>");

// Q6

var firstName2 = prompt("Enter your first Name");
var lastName2 = prompt("Enter your last Name");
var fullName2 = firstName2.concat(lastName2);
console.log(fullName2);

// Q7-8

var qe7 = "Hyderabad";
document.write("String: ", qe7, "<br>");
var res4 = qe7.replace("Hyderabad", "Islamabad");
document.write("After replacement: ", res4 );

var message = `ali and sami are besrfriends they played cricket and football together`;
document.write(`${message} <br>`);
var result = message.replaceAll("and", "&");
document.write(`After Replacement: ${result}`);

// Q9-12

var value1 = 472;
var conversion1 =  value1.toString();
document.write(`Value: ${conversion1} <br>`);
document.write("Type: ", typeof conversion1, "<br>");

var value2 = "472";
var conversion2 =  Number(value2);
document.write(`Value: ${conversion2} <br>`);
document.write("Type: ", typeof conversion2, "<br>");

var input1 = "peanut";
document.write(`User Input: ${input1} <br>`);
var inputAgain = input1.toUpperCase();
document.write(`Upper Case: ${inputAgain} <br> <br>`);

var input2 = "javascript";
document.write(`User Input: ${input2} <br>`);
var printInput = input1.toUpperCase();
document.write(`Upper Case: ${printInput} <br>`);

var num = 35.36;
document.write(`Num: ${num} <br>`);
var num1 =  num.toString();
document.write(`Result: ${num1}`);

var userInput = prompt("Enter sweet name")
var A = ["Cake", "Apple Pie", "Cookie", "Chips", "Patties"];
var firstCharac = userInput.slice(0,1).toUpperCase();
var remainCharac = userInput.slice(1, ).toLowerCase();
var resUlt = firstCharac + remainCharac;
console.log(resUlt);
var A = ["Cake", "Apple Pie", "Cookie", "Chips", "Patties"];
var flags = false;
for (i = 0; i < A.length; i++) {
    if (userInput === A[i]) {
        alert(`${A[i]} is available at ${A.indexOf(A[i])}`);
        flags = true;
    }
}
if (flags === false) {
    alert(`${userInput} not available`);
}

var takeLengthofPassword = +prompt("Enter length of password");
var input = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&`;
var password = "";
for (i = 0; i < takeLengthofPassword; i++) {
    randomNumber = Math.floor(Math.random() * input.length);
    password += input[randomNumber];
} console.log(password);

var input5 = "Pakistan";
document.write(`User Input: ${input5} <br>`);
var res = input5.charAt(7);
document.write("Last charac of input: ", res)