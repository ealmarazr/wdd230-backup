var lastChange = document.lastModified;
document.getElementById("last-updated").innerHTML = "Last updated: " + lastChange;

/*let outputDate = document.querySelector('date-time')*/


var today = new Date();
 let month = today.getMonth() + 1;
let year  = today.getFullYear();
let date  = today.getDate();

document.getElementById("today-is").innerHTML = today;



/** get the date time as UK format */
/*
var fulldateUK = new Intl.DateTimeFormat("en-UK", { dateStyle:"full"}).format(today);
datefieldUK.innerHTML = `<span>${fulldateUK}</span>`; 
document.getElementById("today-is").innerHTML = 'Date: ' + currentDate;
*/

/* end of data*/

function toggleMenu() {
   document.getElementsByClassName("primaryNav")[0].classList.toggle("responsive");
}
