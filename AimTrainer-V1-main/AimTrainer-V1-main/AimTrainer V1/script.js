const puntero=document.querySelector(".puntero");
const tablero=document.querySelector(".table");


let puntos=0;
let clickFueraDelTablero=0;


//EVENTOS DE CLICK SOBRE EL PUNTERO
puntero.addEventListener("click",eventosAlClick);
tablero.addEventListener("click",eventosAlClickFueraDelTablero);

function eventosAlClick(){
    sumarPuntos();
    moverPuntero();
    
    let audio=document.getElementById("disparo-sonido");
    audio.play();

   
}

let arranco=false;

function eventosAlClickFueraDelTablero() {
    clickFueraDelTablero++;

    document.querySelector("#errados").innerHTML= clickFueraDelTablero;

    calcularPrecision();

    if (arranco == false) {
        arrancarCronometro();
        arranco=true;
    }
    
}

function sumarPuntos() {
    puntos++;
    document.querySelector("#acertado").innerHTML=puntos;
}

function moverPuntero() {
    var ejeX=(Math.random()*(90 - 10));
    var ejeY=(Math.random()*(90 - 10));
    
    puntero.style.left = ejeX + "%";
    puntero.style.top = ejeY + "%";
}

function calcularPrecision() {
    let precision2= (puntos*100)/clickFueraDelTablero;
    let precision= precision2.toFixed(2);


    document.querySelector("#precision").innerHTML= precision;

    return precision;
}

//CRONOMETRO
let seg=30;
let contador;
let cronometro = document.querySelector("#cronometro-restrante");

function arrancarCronometro(){
    contador=setInterval(
    function(){
        cronometro.innerHTML = seg;
        
        if (seg == 0) {
            clearInterval(contador);
            mostrarResultados();
        }

        seg--;

    },1000);
}

function mostrarResultados() {
    document.querySelector("#banner-precision").innerHTML = calcularPrecision() + "%";
    document.querySelector("#banner-aciertos").innerHTML = puntos;
    document.querySelector("#banner-errados").innerHTML = clickFueraDelTablero;
    
    let botonReintentar=document.querySelector(".boton-reintentar");

    botonReintentar.addEventListener("click",function(){
        window.location.reload();
    });

    document.querySelector(".banner-container").style.display= "flex";
}