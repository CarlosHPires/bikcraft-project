// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

console.log("javascript".includes("teste"));

function linkActivate(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(linkActivate);

// Ativar itens do orçamento

const params = new URLSearchParams(location.search);

function productAtivate(param) {
  const element = document.getElementById(param);
  if (element) {
    element.checked = true;
  }
}

params.forEach(productAtivate);

// Perguntas frequentes

const questions = document.querySelectorAll(".questions button");

function questionActivate(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("activate");
  const activate = answer.classList.contains("activate");
  question.setAttribute("aria-expanded", activate);
}

function questionsEvents(question) {
  question.addEventListener("click", questionActivate);
}

questions.forEach(questionsEvents);
console.log(questions);

// Galeria Imagens

const gallery = document.querySelectorAll(".bicycle-images img");
const containerGallery = document.querySelector(".bicycle-images");

function changeImage(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    containerGallery.prepend(img);
  }
}

function eventsGallery(img) {
  img.addEventListener("click", changeImage);
}

gallery.forEach(eventsGallery);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
