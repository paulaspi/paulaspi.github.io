import hikesClass from "./hikes.js";

const hikes = new hikesClass();
const hikeList = hikes.getHikes();
const imgBasePath = "//byui-cit.github.io/cit261/examples/";
const hikeListElement = document.getElementById("hikes");


class hikesRendering{
  constructor(imgPath, hikeList, hikeListElement){
    this.imgPath = imgPath;
    this.hikeList = hikeList;
    this.hikeListElement = hikeListElement;

    window.addEventListener("load", () => this.showHikeList());
  }

  getHikeByName(name){
    return this.hikeList.find(hike => hike.name === name)
  }

  showHikeList() {
    this.hikeListElement.innerHTML = "";
    this.renderHikeList(this.hikeList, this.hikeListElement);

    const showOneDetailedHike = (event) =>{
      const hikeName = event.target.closest("li").querySelector("h2").textContent;
      const clickedHike = this.getHikeByName(hikeName);
      const hikeArticle = this.renderOneHikedetails(clickedHike);
      this.hikeListElement.innerHTML = "";
      this.hikeListElement.appendChild(hikeArticle)
    }

    this.hikeListElement.addEventListener("click", showOneDetailedHike)
  }
  
  renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
      parent.appendChild(this.renderOneHike(hike));
    });
  }


  renderOneHike(hike) {
    const item = document.createElement("li");
  
    item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;
  
    return item;
  }

  renderOneHikedetails(hike) {
    const hikeElement = document.createElement("article");

    hikeElement.innerHTML = `
      <h2>${hike.name}</h2>
      <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"/>
      <div class="difficulty">${hike.difficulty}</div>
      <div class="distance">${hike.distance}</div>
      <p class="description">${hike.description}</p>
      <p class="direction"><span class="bold">Direction: </span>${hike.directions}</p>
    `;


    return hikeElement;
  }
}

new hikesRendering(imgBasePath, hikeList, hikeListElement);