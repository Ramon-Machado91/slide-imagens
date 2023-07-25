let listaDeSlides = document.querySelectorAll(".slide");
let setaAvancar = document.getElementById("avancar");
let setaVoltar = document.getElementById("voltar");

let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {
  if (imagemAtual === listaDeSlides.length - 1) {
    return;
  }

  esconderImagemAberta();
  imagemAtual++;
  listaDeSlides[imagemAtual].classList.add("mostrar");

  mostrarEsconderSetas();
});

setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }

  esconderImagemAberta();
  imagemAtual--;
  listaDeSlides[imagemAtual].classList.add("mostrar");

  mostrarEsconderSetas();
});

function esconderImagemAberta() {
  const imagemAberta = document.querySelector(".mostrar");
  imagemAberta.classList.remove("mostrar");
}

function mostrarEsconderSetas() {
  const naoPrimeiraImagem = imagemAtual != 0;
  if (naoPrimeiraImagem) {
    setaVoltar.classList.remove("opacidade");
  } else {
    setaVoltar.classList.add("opacidade");
  }

  const ultimaImagem =
    imagemAtual != 0 && imagemAtual === listaDeSlides.length - 1;
  if (ultimaImagem) {
    setaAvancar.classList.add("opacidade");
  } else {
    setaAvancar.classList.remove("opacidade");
  }
}
