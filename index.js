// script for card scrolling and arrow style
document.addEventListener("DOMContentLoaded", function () {
  const buttonRight = document.getElementById("slideRight");
  const buttonLeft = document.getElementById("slideLeft");
  const cardDeck = document.getElementById("card-deck");

  //   for card scrolling
  buttonRight.onclick = function () {
    console.log("working");
    document.getElementById("card-deck").scrollLeft += 250;
    checkScroll();
  };
  buttonLeft.onclick = function () {
    document.getElementById("card-deck").scrollLeft -= 250;
    checkScroll();
  };

  //   based on card position in card deck arrow stylw changed
  function checkScroll() {
    if (cardDeck.scrollLeft + cardDeck.clientWidth >= cardDeck.scrollWidth) {
      buttonRight.classList.add("disabled");
    } else {
      buttonRight.classList.remove("disabled");
    }

    if (cardDeck.scrollLeft <= 0) {
      buttonLeft.classList.add("disabled");
    } else {
      buttonLeft.classList.remove("disabled");
    }
  }

  checkScroll();
});

//card data
const cardDataArray = [
  {
    imgSrc: "./assets/Mask Group 1@2.png",
    imgAlt: "Description of the SVG",
    profileImgSrc: "./assets/Ellipse 24@2x.png",
    profileImgAlt: "Description",
    name: "John Doe",
    title: "Head of Marketing",
    mainTitle: "Tips for a good Pitching Presentation",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    imgSrc: "./assets/Mask Group 1.png",
    imgAlt: "Description of the SVG",
    profileImgSrc: "./assets/Ellipse 24.png",
    profileImgAlt: "Description",
    name: "Jane Maria",
    title: "Designer",
    mainTitle: "Reaching Deal with your Clients",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    imgSrc: "./assets/Mask Group 1@2x.png",
    imgAlt: "Description of the SVG",
    profileImgSrc: "./assets/Ellipse 24@2x.png",
    profileImgAlt: "Description",
    name: "Jack Dorsey",
    title: "Marketing Specialist",
    mainTitle: "Improve Your Content’s Traffic",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    imgSrc: "./assets/Mask Group 1@2.png",
    imgAlt: "Description of the SVG",
    profileImgSrc: "./assets/Ellipse 24@2x.png",
    profileImgAlt: "Description",
    name: "John Doe",
    title: "Head of Marketing",
    mainTitle: "Tips for a good Pitching Presentation",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    imgSrc: "./assets/Mask Group 1.png",
    imgAlt: "Description of the SVG",
    profileImgSrc: "./assets/Ellipse 24.png",
    profileImgAlt: "Description",
    name: "Jane Maria",
    title: "Designer",
    mainTitle: "Reaching Deal with your Clients",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    imgSrc: "./assets/Mask Group 1@2x.png",
    imgAlt: "Description of the SVG",
    profileImgSrc: "./assets/Ellipse 24@2x.png",
    profileImgAlt: "Description",
    name: "Jack Dorsey",
    title: "Marketing Specialist",
    mainTitle: "Improve Your Content’s Traffic",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
];

// dynamic card
const createCard = (data) => {
  return `
      <div class="card" >
        <div style="position: relative">
          <img src="${data.imgSrc}" class="card-img" alt="${data.imgAlt}" />
          <div class="card-overlay"  >
            <img src="${data.profileImgSrc}" style="width: 32px; height: 32px" alt="${data.profileImgAlt}" />
            <div class="card-overlay-content">
              <p class="content-name">
                ${data.name}
              </p>
              <pclass="content-title" >
                ${data.title}
              </p>
            </div>
          </div>
        </div>
        <div class="content">
          <p class="main-title">
            ${data.mainTitle}
          </p>
          <p class="description">
            ${data.description}
          </p>
        </div>
      </div>
    `;
};

//manupulation
const cardContainer = document.getElementById("card-deck");
cardDataArray.forEach((data) => {
  cardContainer.innerHTML += createCard(data);
});
