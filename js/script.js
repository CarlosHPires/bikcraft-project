// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

console.log("javascript".includes("teste"));

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do orçamento

const params = new URLSearchParams(location.search);

function productAtivate(param) {
  const element = document.getElementById(param);
  if (element) {
    element.checked = true;
  }
}

params.forEach(productAtivate);
