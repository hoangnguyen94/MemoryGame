const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 10;

playerLivesCount.textContent = playerLives;

const getData = () => [
  {imgSrc: "./img/birdo.png", name: "birdo"},
  {imgSrc: "./img/bomb.png", name: "bomb"},
  {imgSrc: "./img/bowser.png", name: "bowser"},
  {imgSrc: "./img/fuzzy.png", name: "fuzzy"},
  {imgSrc: "./img/goomba.png", name: "goomba"},
  {imgSrc: "./img/hammerbro.png", name: "hammerbro"},
  {imgSrc: "./img/koopa.png", name: "koopa"},
  {imgSrc: "./img/luigi.png", name: "luigi"},
  {imgSrc: "./img/birdo.png", name: "birdo"},
  {imgSrc: "./img/bomb.png", name: "bomb"},
  {imgSrc: "./img/bowser.png", name: "bowser"},
  {imgSrc: "./img/fuzzy.png", name: "fuzzy"},
  {imgSrc: "./img/goomba.png", name: "goomba"},
  {imgSrc: "./img/hammerbro.png", name: "hammerbro"},
  {imgSrc: "./img/koopa.png", name: "koopa"},
  {imgSrc: "./img/luigi.png", name: "luigi"},
  
  {imgSrc: "./img/mario.png", name: "mario"},
  {imgSrc: "./img/mario.png", name: "mario"},
  {imgSrc: "./img/yoshi.png", name: "yoshi"},
  {imgSrc: "./img/yoshi.png", name: "yoshi"},
];
const random = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

const cardGenerator = () => {
  const cardData = random();
  
  cardData.forEach((item) => {  
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    backImg = document.createElement("img");
    backImg.src = "./img/mushroom.png" ;
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
   
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    back.appendChild(backImg);
    //addEventListener for the image
    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};
// create checking a card
const checkCards = (e) => { 
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll('.flipped');
  const toggleCard = document.querySelectorAll(".toggleCard");
  // compare
  if (flippedCards.length === 2) {
    if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")
    ) {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      })
    } else {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() =>card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if(playerLives === 0){
        restart("HaHa You're Just Lose Again");
      }
    }
  }
  // run a check for winner
  if(toggleCard.length === 20){
    restart("Nice Try But Can Win next game!!");
  }
};
// restart game
const restart = (text) => {
  let cardData = random();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove('toggleCard');
    // random cards
    setTimeout(() => {
    cards[index].style.pointerEvent = "all";
    faces[index].src = item.imgSrc;
    cards[index].setAttribute("name", item.name);
    section.style.pointerEvents = "all";
  },1000);
  });
  playerLives = 10;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};

cardGenerator();

