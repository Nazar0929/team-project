const themeChanger = document.querySelector(".header__theme-changer");
const interactiveItem = document.querySelector(".header__interactive");
const arrowIcon = interactiveItem.querySelector(".header__arrow");

interactiveItem.addEventListener("click", () => {
    arrowIcon.classList.toggle("rotated");
});


function toggleTheme() {
  document.body.classList.toggle("dark-mode");
// document.body.style.backgroundColor = "red"
}

themeChanger.addEventListener("click", toggleTheme);

const nun1 = document.getElementById("nunn1");

nun1.addEventListener("click", () => {
  game.classList.replace("game", "none");
 dino.classList.replace("dino", "none");
 socker.classList.replace("socker", "none");
 acquaintance.classList.replace("team", "none");
 science.classList.replace("science", "none");
 hero.classList.replace("none", "hero");
 calc.classList.replace("none", "calc");
 time.classList.replace("none", "time");
 number.classList.replace("none", " number");

});

const nuj2 = document.getElementById("nuj2");

nuj2.addEventListener("click", () => {


  science.classList.replace("science", "none");
  acquaintance.classList.replace("team", "none");
  calc.classList.replace("calc", "none");
  hero.classList.replace("hero", "none");
  time.classList.replace("time", "none");
  number.classList.replace("numbers", "none");
  game.classList.replace("none", "game");
  dino.classList.replace("none", "dino");
  socker.classList.replace("none", "socker");



});




const nul3 = document.getElementById("nul3");

nul3.addEventListener("click", () => {
  calc.classList.replace("calc", "none");
  hero.classList.replace("hero", "none");
  time.classList.replace("time", "none");
  number.classList.replace("numbers", "none");
  game.classList.replace("game", "none");
  dino.classList.replace("dino", "none");
  socker.classList.replace("socker", "none");
  acquaintance.classList.replace("none", "team")
  science.classList.replace("none", "science");


});







const dino = document.getElementById("dino")
const calc = document.getElementById("calc")
const hero = document.getElementById("hero")
const time = document.getElementById("time")
const number = document.getElementById("number")
const game = document.getElementById("game")
const socker = document.getElementById("socker")
const acquaintance = document.getElementById("acquaintance");
const science = document.getElementById("science");




