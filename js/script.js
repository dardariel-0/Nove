// links menu

const links = document.querySelectorAll(".header-menu a");

function AtivarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(AtivarLink);

// ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
  console.log(element);
}

parametros.forEach(ativarProduto);

// perguntas frequentes

const perguntas = document.querySelectorAll(".questions button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativo");
  const ativo = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativo);

  console.log(resposta);
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPerguntas);

// galeria de fotos fones

const galeria = document.querySelectorAll(".fone-img img ");
const galeriaContainer = document.querySelector(".fone-img");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = window.matchMedia("(min-width: 600px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// plugins ANIMAÇÃO

// fazer com que o script so carregue nas paginas em que colocamos ele, caso contrario da erro
if (window.SimpleAnime) {
  new SimpleAnime();
}
