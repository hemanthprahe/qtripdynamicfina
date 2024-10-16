import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
      
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    let fetching = await fetch (config.backendEndpoint + "/cities");
    let cities = await fetching.json();
    return cities;
 }
 catch(error){
  // console.error("error fetching cities",error);
   return null;
  }

}



//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let cardNew = document.createElement("div");
  cardNew.className = "col-6 col-lg-3 mb-4";
  cardNew.innerHTML = `
      <a href="pages/adventures/?city=${id}" id ="${id}">
          <div class="tile">
             <img src="${image}"/>
              <div class="tile-text text-center">
                  <h5>${city}</h5>
                  <p>${description}</p>
              </div>
           </div>
      </a>
  `;
  document.getElementById("data").appendChild(cardNew)
}



export { init, fetchCities, addCityToDOM };
