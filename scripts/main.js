function last_updated() {
    document.getElementById("last-updated").innerHTML =  "Last updated: " + new Date(document.lastModified);
}