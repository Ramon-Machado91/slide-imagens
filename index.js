let listaDeSlides = document.querySelectorAll('#slides-container')
let setaAvancar = document.getElementById('avancar')
let setaVoltar = document.getElementById('voltar')

let imagemAtual = 0;

setaAvancar.addEventListener('click',function(){

    esconderImagemAberta()

    console.log(listaDeSlides)
})

function esconderImagemAberta(){
    const imagemAberta = document.querySelector('.mostrar');
    imagemAberta.classList.remove('mostrar')
    
}