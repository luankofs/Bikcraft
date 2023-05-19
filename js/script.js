/* ATIVAR LINKS MENU */
const navLinks = document.querySelectorAll(".header-menu a");
// iterar e comparar os itens a url do navegador, se for o mesmo adiciona a classe active.
navLinks.forEach(function (link) {
  const url = location.href;
  const linkHref = link.href;
  if (url.includes(linkHref)) {
    link.classList.add("active");
  }
});

/* ATIVAR ITENS DO ORÇAMENTO */

// pegar os parametros de pesquisa e iterar no forEach.
const parametros = new URLSearchParams(location.search);
parametros.forEach(function (parametro) {
  // selecionar os elementos de pesquisa (seguro, ouro e prata) e colocar no elemento. Os parametros de pesquisa sao os mesmos que os ID do HTML.
  const element = document.getElementById(parametro);
  // checar os radio selecionados.
  if (element) {
    element.checked = "true";
  }
});

/* ABRIR/ FECHAR PERGUNTAS FREQUENTES */

// const getQuestion = document.querySelectorAll(".perguntas dl dt");

// getQuestion.forEach(function (question) {
//   question.addEventListener("click", showAnswer);
// });

// function showAnswer() {
//   const show = this.nextElementSibling;
//   console.log(show);
//   if (show) {
//     show.classList.toggle("perg-Active");
//   }
// }

const perguntas = document.querySelectorAll(".perguntas button");
perguntas.forEach(function (pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
});
function ativarPergunta(event) {
  //pegar o evento de clique no button
  const pergunta = event.currentTarget;
  //pegar o aria-controls que irá ser usado como id do button capturado pelo clique
  const controls = pergunta.getAttribute("aria-controls");
  //pegar o elemento dd pelo id.
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  //verificar se resposta contém ativa, se conter é ativa, e seta com setAttribute.
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

// galeria de imagens //

const gallery = document.querySelectorAll(".bicicleta-img img");
const galleryContainer = document.querySelector(".bicicleta-img");
function eventsGallery(img) {
  img.addEventListener("click", switchImg);
}
function switchImg(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galleryContainer.prepend(img);
  }
}
gallery.forEach(eventsGallery);

// Menu

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
