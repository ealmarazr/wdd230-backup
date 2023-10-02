<<<<<<< HEAD
const d = new Date();
let year = d.getFullYear();
document.getElementById("currentYear").innerHTML = year;    

var lastChange = document.lastModified;
document.getElementById("last-updated").innerHTML =  "Last updated: " + lastChange;

function toggleMenu(){
    document.getElementsByClassName("primaryNav")[0].classList.toggle("responsive");
}
=======
const d = new Date();
let year = d.getFullYear();
document.getElementById("currentYear").innerHTML = year;    

var lastChange = document.lastModified;
document.getElementById("last-updated").innerHTML =  "Last updated: " + lastChange;
>>>>>>> 0f9e55550c6b8fc33391d1f92c27c7f8f33fd466
