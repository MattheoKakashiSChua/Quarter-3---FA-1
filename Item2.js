var firstName = prompt("Enter your first name: "); 
var lastName = prompt("Enter your last name: "); 
var birthYear = prompt("Enter your birth year: "); 

var age = 2025 - birthYear; 
document.getElementById("greeting").innerHTML = "Hello, " + firstName + " " + lastName + "!" + " How does it feel to be " + age + " years old?";
