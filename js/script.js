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
