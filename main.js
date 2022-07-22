import { mockData } from "./mockData.js";

console.log(mockData);

const dataDescendentSortedByPoints = mockData.sort(
  (pilotPoints, otherPilotPoints) =>
    otherPilotPoints.points - pilotPoints.points
);

console.log(dataDescendentSortedByPoints);

let cards = "";

const addPointsButton = document.querySelector(".add-points");

function addPoints() {
  console.log("addpoints");
  if (addPointsButton) {
    document.querySelector(".points").textContent = points + 1;
  }
  console.log("button pressed");
}

function changeBorderColorMouseOver(currentColor) {
  // const border = document.querySelector(".border");
  // border.addEventListener("mouseenter", () => {
  //   border.style.cssText = `border-top-color: ${currentColor}; border-right-color: ${currentColor}`;
  // });

  console.log("mouse over");
}

// TODO: change border color
for (let i = 0; i < 3; i++) {
  let currentColor = dataDescendentSortedByPoints[i].hex;

  let points = dataDescendentSortedByPoints[i].points;

  cards += `
  <article class="card">
  <div
  class="border"
  onMouseOver="${changeBorderColorMouseOver(currentColor)}"
  onMouseOut="changeBorderColorMouseOut()"
  >
  </div>
    <div class="card-header">
      <p class="rank">${i + 1}</p>
      <span class="points-and-button">
      <button type="button" class="add-points" onClick="${addPoints}">Add PTS</button>
        <p class="points">${points}</p>
      </span>
    </div>
    <hr />
    <div class="card-body">
      <div class="container-name">
        <div class="name-and-line">
          <span class="line-color" style="background:${currentColor};"></span>
          <span class="name">
            <p class="firstName">
              ${dataDescendentSortedByPoints[i].firstName}
            </p>
            <p class="lastName">${dataDescendentSortedByPoints[i].lastName}</p>
          </span>
        </div>
        <p class="country-flag">${dataDescendentSortedByPoints[i].country}</p>
      </div>
      <hr />
      <p class="team-name">${dataDescendentSortedByPoints[i].team}</p>
      <div class="photo-container">
        <div class="photo-background"></div>
        <img
          src="${dataDescendentSortedByPoints[i].image}"
          alt="pilot's photo"
          class="photo"
        />

        <p class="number">${dataDescendentSortedByPoints[i].number}</p>
      </div>
    </div>
</article>
            `;
}

document.querySelector(".container").insertAdjacentHTML("beforeend", cards);

//Aici am incercat eu mai multe metode de a schimba culoarea la border

function changeBorderColorMouseOut() {
  border.style.cssText = "border-top-color: black; border-right-color: black";
  console.log("mouse out");
}
