var lastChange = document.lastModified;
document.getElementById("last-updated").innerHTML = "Last updated: " + lastChange;

/*let outputDate = document.querySelector('date-time')*/
var today = new Date();
let month = today.getMonth() + 1;
let year  = today.getFullYear();
let date  = today.getDate();
let currentDate = `${month}/${date}/${year}`;
document.getElementById("date-time").innerHTML = 'Date: ' + currentDate;

/** get the date time as UK format */

const datefieldUK= document.getElementById("today-is");
const fulldateUK = new Intl.DateTimeFormat("en-UK", { dateStyle:"full"}).format(today);
/*datefieldUK.innerHTML = `<em>${fulldateUK}</em>`; */
document.getElementById('today-is').innerHTML = "12345";

/* end of data*/

function toggleMenu() {
   document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;
