import { mockData } from "./mockData.js";

console.log(mockData);

const dataDescendentSortedByPoints = mockData.sort(
  (pilotPoints, otherPilotPoints) =>
    otherPilotPoints.points - pilotPoints.points
);

console.log(dataDescendentSortedByPoints);

function changeBorderColorMouseOver(currentColor) {
  // const border = document.querySelector(".border");
  // border.addEventListener("mouseenter", () => {
  //   border.style.cssText = `border-top-color: ${currentColor}; border-right-color: ${currentColor}`;
  // });

  console.log("mouse over");
}

function mouseOver(hex) {
  document.querySelector(
    ".border"
  ).style.border.style.cssText = `border-top: solid 2px  ${hex};
  border-right: solid 2px  ${hex}`;
}
function mouseOut() {
  document.querySelector(".border").style.borderRightColor = "black";
}
// onMouseOver="${() => mouseOver(hex)}"
// onMouseOut="${() => mouseOut()}"

// TODO: change border color
// for (let i = 0; i < dataDescendentSortedByPoints.length; i++)

let cards = "";

dataDescendentSortedByPoints.forEach(
  (
    { firstName, lastName, number, team, points, image, country, hex },
    index
  ) => {
    cards += `

    <article class="card">
  <div
    class="border"
  >
    <div class="card-header">
      <p class="rank">${index + 1}</p>
      <span class="points-and-button">
        <button type="button" class="add-points">Add PTS</button>
        <p class="points-text">${points}</p>
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

    document.querySelector(".container").addEventListener("mouseenter", (e) => {
      if (e.target.classList.contains("border")) {
        console.log("border hover");
        const border = document.querySelector(".border");
        border.style.borderTopColor = hex;
      }
    });
  }
  // const pointsText = document.getElementsByClassName("points");
  // const button = document.querySelector("add-points");
  // let pointsNr = parseInt(pointsText.innerText);
  // button[index].addEventListener("click", () => {
  //   pointsNr += 1;
  //   pointsText.innerText = pointsNr;
  // });
);

const container = document.querySelector(".container");
container.insertAdjacentHTML("beforeend", cards);

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("points-text")) {
    console.log("pressed add points");
    e.target.textContent += 1;
  }
});

//Aici am incercat mai multe metode de a schimba culoarea la border
// function changeBorderColorMouseOut() {
//   border.style.cssText = "border-top-color: black; border-right-color: black";
//   console.log("mouse out");
// }
