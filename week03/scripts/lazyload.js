var lastChange = document.lastModified;
document.getElementById("last-updated").innerHTML =  "Last updated: " + lastChange;

const d = new Date();
let year = d.getFullYear();
document.getElementById("currentYear").innerHTML = year;    
