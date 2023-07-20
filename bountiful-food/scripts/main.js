var lastChange = document.lastModified;
document.getElementById("last-updated").innerHTML =  "Last updated: " + lastChange;

/*let outputDate = document.querySelector('date-time')*/
var today = new Date();
let month = today.getMonth() + 1;
let year  = today.getFullYear();
let date  = today.getDate();
/*let currentDate = `${month}/${date}/${year}`;*/
let currentDate = today;
document.getElementsById("date-time").innerHTML = 'Today is ' + currentDate;

function toggleMenu() {
    document.getElementsByClassName("primaryNav")[0].classList.toggle("responsive");
}


/************    data for the list of fruit *************/

  const url = "data/dataFruit.json";
  
  async function loadFruits(){
    const response = await fetch(url);
    const fruits = await response.json();
    return fruits;
  }

  document.addEventListener("DOMContentLoaded", async()=>{
  let fruits = [];
  
  try{
    fruits = await loadFruits();
    } catch (e) {
      console.log("Error!");
      console.log(e);
    }

    console.log(fruits);
    let container = document.getElementById("container-table");
         
    let table = document.createElement("table");
         
    let cols = Object.keys(fruits[0]);
         
    let thead = document.createElement("thead");
    let tr    = document.createElement("tr");


  });

  

/************loading weather information */
  // select HTML elements in the document
  
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

/*const urlWeather = 'https://api.openweathermap.org/data/2.5/forecast?q=west+valley+city%2c+utah&appid=e8c19ed7cb78943327233854cb02396c';*/
const urlWeather = 'west-valley.json';
async function apiFetch() {
    try {
      const response = await fetch(urlWeather);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
          displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  





/*
fetch('dataFruit.json')
  .then(function(response){
    return response.json();
  })
  .then(function(products){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let product of products){
      out += `
        <tr>
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td>${product.family}</td>
        </tr>
      `;
    }
    placeholder.innerHTML = out;
  })
  */