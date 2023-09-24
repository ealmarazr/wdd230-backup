var lastChange = document.lastModified;
document.getElementById("last-updated").innerHTML = "Last updated: " + lastChange;

/*let outputDate = document.querySelector('date-time')*/
var today = new Date();
let month = today.getMonth() + 1;
let year  = today.getFullYear();
let date  = today.getDate();
let currentDate = `${month}/${date}/${year}`;
document.getElementById("todayIs").innerHTML = 'Date: ' + currentDate;

document.getElementById("currentYear").innerHTML = year;
/* end of data*/

function toggleMenu() {
   document.getElementsByClassName("primaryNav")[0].classList.toggle("responsive");
}
