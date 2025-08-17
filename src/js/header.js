
const themeChanger = document.querySelector(".header__theme-changer");
const body = document.body;

themeChanger.addEventListener("change", () => {
  const isDark = themeChanger.checked;
  

  body.classList.toggle("dark-mode", isDark);


});


const sections = {
  hero: document.getElementById("hero"),
  calc: document.getElementById("calc"),
  time: document.getElementById("time"),
  number: document.getElementById("number"),
  game: document.getElementById("game"),
  dino: document.getElementById("dino"),
  socker: document.getElementById("socker"),
  acquaintance: document.getElementById("acquaintance"),
  science: document.getElementById("science"),
};

function hideAllSections() {
  Object.values(sections).forEach(s => { if (s) s.classList.add("none"); });
}

function showSection(...list) {
  hideAllSections();
  list.forEach(s => { if (s) s.classList.remove("none"); });
}


document.getElementById("nunn1")?.addEventListener("click", () => {
  showSection(sections.hero, sections.calc, sections.time, sections.number);
});

document.getElementById("nuj2")?.addEventListener("click", () => {
  showSection(sections.game, sections.dino, sections.socker);
});

document.getElementById("nul3")?.addEventListener("click", () => {
  showSection(sections.acquaintance, sections.science);
});


const interactiveItems = document.querySelectorAll('.header__interactive');

interactiveItems.forEach(item => {
  const label = item.querySelector('.header__interactive-label');
  if (!label) return;

  label.addEventListener('click', e => {
    e.stopPropagation(); 

    interactiveItems.forEach(i => { if (i !== item) i.classList.remove('open'); });

    item.classList.toggle('open');
  });
});


document.addEventListener('click', () => {
  interactiveItems.forEach(item => item.classList.remove('open'));
});


window.addEventListener('load', () => {
  if (themeChanger.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});












