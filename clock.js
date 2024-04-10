"use strict";

const displayCurrentTime = () => {

   //defining all require variables and getting realtime current time data
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var md = "AM";
    
    // checking if hrs is greater than 12hr which means its gonna be military time
    if (hrs > 12) {
       hrs -= 12; //minus -12hrs out of 24hrs
       md = "PM";  //assign md to pm
    }
    //check if hrs become zero then assign 12
    if (hrs === 0) { 
       hrs = 12;
    }

    //if min is less than 10 add padstart ex: 05
    if (min < 10) {
       min = min.toString().padStart(2, "0");
    }
    if (sec < 10) {
       sec = sec.toString().padStart(2, "0");
    }

    //var time = hrs + ":" + min + ":" + sec + " " + md;
    //Append value
    document.querySelector("#hours").innerHTML = hrs ;
    document.querySelector("#minutes").innerHTML = min ;
    document.querySelector("#seconds").innerHTML = sec ;
    document.querySelector("#ampm").innerHTML = md;
    
};
setInterval(displayCurrentTime, 1000); //calling function every 1 sec

//loading even on page load
document.addEventListener("DOMContentLoaded", () => {
	window.addEventListener("load", displayCurrentTime);
});