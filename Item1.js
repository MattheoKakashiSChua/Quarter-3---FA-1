var nickName = "Mattheo"; 
var height = 63; 
var weight = 69; 

var ConvertToFeet = Math.floor(height / 12); 
var convertHeight = height % 12;
var convertWeight = weight * 2.20462; 

alert("Name: " + nickName + "\nHeight: " + ConvertToFeet + "'" + convertHeight + "''" + "\nWeight: " + convertWeight + " lbs");