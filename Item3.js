var ConFirMation = confirm("Do you want to share your information? ") 

if (ConFirMation) { 
    console.log("Name: " + nickName + "\nHeight: " + ConvertToFeet + "'" + convertHeight + "''" + "\nWeight: " + convertWeight + " lbs");
} 
else { 
    console.log("User does not wish to share his/her information.")
} 
