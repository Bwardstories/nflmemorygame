let turnCount = document.querySelector(".turnCount");
let section = document.getElementById("cardSection");
let buttonContainer = document.getElementById("buttonContainer");

let fistPick = "";
let secondPick = "";
let matches = 0;
let turns = 0;
let conference = "";
turnCount.textContent = turns;

let afcButton = document.createElement("button");
let nfcButton = document.createElement("button");

afcButton.classList.add("afcButton");
afcButton.innerHTML = "AFC";
buttonContainer.append(afcButton);

nfcButton.classList.add("nfcButton");
nfcButton.innerHTML = "NFC";
buttonContainer.append(nfcButton);
// generate AFC team images
const getAfcImages = () => [
  { imgSrc: "./images/afc/bengals.png", name: "bengals" },
  { imgSrc: "./images/afc/bills.png", name: "bills" },
  { imgSrc: "./images/afc/broncos.png", name: "broncos" },
  { imgSrc: "./images/afc/browns.jfif", name: "browns" },
  { imgSrc: "./images/afc/chargers.png", name: "chargers" },
  { imgSrc: "./images/afc/chiefs.png", name: "chiefs" },
  { imgSrc: "./images/afc/colts.png", name: "colts" },
  { imgSrc: "./images/afc/dolphins.png", name: "dolphins" },
  { imgSrc: "./images/afc/jaguars.png", name: "jaguars" },
  { imgSrc: "./images/afc/jets.jfif", name: "jets" },
  { imgSrc: "./images/afc/patriots.png", name: "patriots" },
  { imgSrc: "./images/afc/raiders.png", name: "raiders" },
  { imgSrc: "./images/afc/ravens.png", name: "ravens" },
  { imgSrc: "./images/afc/steelers.png", name: "steelers" },
  { imgSrc: "./images/afc/texans.png", name: "texans" },
  { imgSrc: "./images/afc/titans.png", name: "titans" },
  { imgSrc: "./images/afc/bengals.png", name: "bengals" },
  { imgSrc: "./images/afc/bills.png", name: "bills" },
  { imgSrc: "./images/afc/broncos.png", name: "broncos" },
  { imgSrc: "./images/afc/browns.jfif", name: "browns" },
  { imgSrc: "./images/afc/chargers.png", name: "chargers" },
  { imgSrc: "./images/afc/chiefs.png", name: "chiefs" },
  { imgSrc: "./images/afc/colts.png", name: "colts" },
  { imgSrc: "./images/afc/dolphins.png", name: "dolphins" },
  { imgSrc: "./images/afc/jaguars.png", name: "jaguars" },
  { imgSrc: "./images/afc/jets.jfif", name: "jets" },
  { imgSrc: "./images/afc/patriots.png", name: "patriots" },
  { imgSrc: "./images/afc/raiders.png", name: "raiders" },
  { imgSrc: "./images/afc/ravens.png", name: "ravens" },
  { imgSrc: "./images/afc/steelers.png", name: "steelers" },
  { imgSrc: "./images/afc/texans.png", name: "texans" },
  { imgSrc: "./images/afc/titans.png", name: "titans" },
];

const getNfcImages = () => [
  { imgSrc: "./images/nfc/bears.png", name: "bears" },
  { imgSrc: "./images/nfc/buccaneers.png", name: "buccaneers" },
  { imgSrc: "./images/nfc/cardinals.jfif", name: "cardinals" },
  { imgSrc: "./images/nfc/cowboys.png", name: "cowboys" },
  { imgSrc: "./images/nfc/eagles.png", name: "eagles" },
  { imgSrc: "./images/nfc/falconspng.png", name: "falcons" },
  { imgSrc: "./images/nfc/giants.png", name: "giants" },
  { imgSrc: "./images/nfc/lions.jfif", name: "lions" },
  { imgSrc: "./images/nfc/packers.png", name: "packers" },
  { imgSrc: "./images/nfc/panthers.png", name: "panthers" },
  { imgSrc: "./images/nfc/rams.png", name: "rams" },
  { imgSrc: "./images/nfc/saints.png", name: "saints" },
  { imgSrc: "./images/nfc/seahawks.png", name: "seahawks" },
  { imgSrc: "./images/nfc/sf.png", name: "sf" },
  { imgSrc: "./images/nfc/vikings.png", name: "vikings" },
  { imgSrc: "./images/nfc/washington.png", name: "washington" },
  { imgSrc: "./images/nfc/bears.png", name: "bears" },
  { imgSrc: "./images/nfc/buccaneers.png", name: "buccaneers" },
  { imgSrc: "./images/nfc/cardinals.jfif", name: "cardinals" },
  { imgSrc: "./images/nfc/cowboys.png", name: "cowboys" },
  { imgSrc: "./images/nfc/eagles.png", name: "eagles" },
  { imgSrc: "./images/nfc/falconspng.png", name: "falcons" },
  { imgSrc: "./images/nfc/giants.png", name: "giants" },
  { imgSrc: "./images/nfc/lions.jfif", name: "lions" },
  { imgSrc: "./images/nfc/packers.png", name: "packers" },
  { imgSrc: "./images/nfc/panthers.png", name: "panthers" },
  { imgSrc: "./images/nfc/rams.png", name: "rams" },
  { imgSrc: "./images/nfc/saints.png", name: "saints" },
  { imgSrc: "./images/nfc/seahawks.png", name: "seahawks" },
  { imgSrc: "./images/nfc/sf.png", name: "sf" },
  { imgSrc: "./images/nfc/vikings.png", name: "vikings" },
  { imgSrc: "./images/nfc/washington.png", name: "washington" },
];

// randomize AFC images

const randomizeCards = () => {
  if (conference === "afc") {
    const afcImages = getAfcImages();
    afcImages.sort(() => Math.random() - 0.5);
    return afcImages;
  }
  if (conference === "nfc") {
    const nfcImages = getNfcImages();
    nfcImages.sort(() => Math.random() - 0.5);
    return nfcImages;
  }
};

//  create the cards
const cardGenerator = () => {
  const cardData = randomizeCards();
  // generate html for each card
  cardData.forEach(item => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("img");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    // attach info to the cards
    face.src = item.imgSrc;
    back.src = `./images/${conference}/${conference}.png`;
    card.setAttribute("name", item.name);
    // attach cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    card.addEventListener("click", e => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};
afcButton.addEventListener("click", () => {
  conference = "afc";
  cardGenerator();
  afcButton.classList.add("hiddenButtons");
  nfcButton.classList.add("hiddenButtons");
});
nfcButton.addEventListener("click", () => {
  conference = "nfc";
  cardGenerator();
  afcButton.classList.add("hiddenButtons");
  nfcButton.classList.add("hiddenButtons");
});

const checkCards = e => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      flippedCards[0].classList.remove("flipped");
      flippedCards[1].classList.remove("flipped");
      turns++;
      matches++;
      turnCount.textContent = turns;
    } else {
      turns++;
      turnCount.textContent = turns;
      setTimeout(() => {
        flippedCards[0].classList.toggle("toggleCard");
        flippedCards[1].classList.toggle("toggleCard");
      }, 1000);
      flippedCards[0].classList.remove("flipped");
      flippedCards[1].classList.remove("flipped");

      //   flippedCards.splice(0, 2);
      console.log(flippedCards, "wrong");
    }
  }
};

// cardGenerator();
