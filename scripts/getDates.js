const d = new Date();
let year = d.getFullYear();
document.getElementById("currentYear").innerHTML = year;    

var lastChange = document.lastModified;
document.getElementById("last-updated").innerHTML =  "Last updated: " + lastChange;

function toggleMenu(){
    document.getElementsByClassName("primaryNav")[0].classList.toggle("responsive");
}