import { mockData } from "./mockData.js";

console.log(mockData);

const dataDescendentSortedByPoints = mockData.sort(
  (pilotPoints, otherPilotPoints) =>
    otherPilotPoints.points - pilotPoints.points
);

console.log(dataDescendentSortedByPoints);

let cards = "";

dataDescendentSortedByPoints.forEach(
  (
    { firstName, lastName, number, team, points, image, country, hex },
    index
  ) => {
    cards += `
    <article class="card" id="card-number-${index}">
  <div
    class="border"
  >
    <div class="card-header">
      <p class="rank">${index + 1}</p>
      <span class="points-and-button">
        <button type="button" class="add-points" id="add-button-${index}">Add PTS</button>
        <p class="points-text" id="points-text-${index}">${points}</p>
      </span>
    </div>
    <hr />
    <div class="card-body">
      <div class="container-name">
        <div class="name-and-line">
          <span class="line-color" style="background:${hex};"></span>
          <span class="name">
            <p class="firstName">${firstName}</p>
            <p class="lastName">${lastName}</p>
          </span>
        </div>
        <p class="country-flag">${country}</p>
      </div>
      <hr />
      <p class="team-name">${team}</p>
      <div class="photo-container">
        <div class="photo-background"></div>
        <img src="${image}" alt="pilot's photo" class="photo" />
        <p class="number">${number}</p>
      </div>
    </div>
  </div>
</article>
  `;
  }
);

const container = document.querySelector(".container");
container.insertAdjacentHTML("beforeend", cards);

function addPoints(index) {
  const addPointsButton = document.getElementById(`add-button-${index}`);

  addPointsButton.addEventListener("click", (e) => {
    console.log("pressed add points");
    const pointsText = document.getElementById(`points-text-${index}`);
    const value = pointsText.innerHTML;
    const newValue = parseInt(value) + 1;
    pointsText.innerHTML = newValue;
  });
}

function changeBorderColor(index) {
  const currentCard = document.getElementById(`card-number-${index}`);
  currentCard.addEventListener("mouseenter", (e) => {
    const border = currentCard.getElementsByClassName("border").item(0);
    border.style.borderTopColor = dataDescendentSortedByPoints[index].hex;
    border.style.borderRightColor = dataDescendentSortedByPoints[index].hex;
  });

  currentCard.addEventListener("mouseleave", (e) => {
    const border = currentCard.getElementsByClassName("border").item(0);
    border.style.borderTopColor = "black";
    border.style.borderRightColor = "black";
  });
}

Array.from(cards).forEach((card, index) => {
  addPoints(index);
  changeBorderColor(index);
});
