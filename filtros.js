
/* filtros da pagina biblioteca e obras*/
let filtrosButtons = document.querySelectorAll(".filter_buttons .btn-filtro");
let cardsFiltraveis = document.querySelectorAll(".cards-fitros .cards_obras");

console.log(filtrosButtons, cardsFiltraveis);

let filtrosCards = (e) => {
  document.querySelector(".btn-filtro.active").classList.remove("active");
  e.target.classList.add("active");
  console.log(e.target);

  let filtroSelecionado = e.target.dataset.name;

  cardsFiltraveis.forEach((card) => {
    card.classList.add("hide");

    if (card.dataset.name === filtroSelecionado || filtroSelecionado === "All") {
      card.classList.remove("hide");
    }
  });
};

filtrosButtons.forEach((button) => button.addEventListener("click", filtrosCards));
