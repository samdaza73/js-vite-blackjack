import _ from 'underscore';//tomamos todo el paquete y lo renonbramos con guión bajo

// Como creé un archivo index en el directorio usecases con todas las exportaciones, ahora hago una sola importación
import { crearDeck, crearCarta, pedirCarta,  turnoComputadora, valorCarta } from "./usecases";


// Sintaxis del patrón módulo para proteger el código, declaro una función flecha anónima autoinvocada; crea un nuevo scope que no tiene una referencia por nombre y va a ser imposible llamar el objeto directamente, las variables no tienen un identificador por nombre, a esto se le conoce como el patrón módulo; cuando se usa este patron es recomendable usar el modo estricto 'use strict'
const miModulo = (() => {
'use strict'

/**
   * 2C = dos de tréboles(clubs)
   * 2D = dos de diamantes (diamonds)
   * 2H = dos de corazones (hearts)
   * 2S = dos de espadas (spades)
   * deck significa baraja
   */

let deck    =           [];
const   tipos =         ['C', 'D', 'H', 'S'],//estos tipos son las letras de las diferentes tipos de cartas
        especiales =    ['A', 'J', 'Q', 'K'];//estas son las cartas que no tienen número al principio

  // inicializo las variables de puntos
/* let puntosJugador = 0,
      puntosComputadora = 0; */
  // En vez de usar estas variables voy a usar un arreglo que contenga el total de jugadores
let puntosJugadores = [];


  // Referencias del HTML querySelector Eventos
const  btnPedir    = document.querySelector('#btnPedir'),
  //console.log(btnPedir);//para probar que está accediendo al botón pedir carta
btnDetener  = document.querySelector('#btnDetener'),
btnNuevo    = document.querySelector('#btnNuevo');

  // Código para mostrar dinámicamente en pantalla las cartas seleccionadas por el jugador
    /* este código ya no lo voy a usar
    const divCartasJugador = document.querySelector('#jugador-cartas'),
    divCartasComputadora = document.querySelector('#computadora-cartas'), */

  // optimizar código anterior// Código para mostrar dinámicamente en pantalla las cartas seleccionadas por el jugador
const   divCartasJugadores  = document.querySelectorAll('.divCartas'),
        puntosHTML          = document.querySelectorAll('small');
      // Siempre que manipulemos el html es buena práctica guardarlo en una variable para luego utilizarlo


//INICIALIZACIÓN Y BORRADO DEL JUEGO
  // Esta función inicializa el juego y establece el número de jugadores; el último jugador es la computadora
    const inicializarJuego = (numJugadores = 2) => {

    deck = crearDeck(tipos, especiales)//aquí usaríamos el nuevo alias para crearDeck

      // Ciclo para el número de jugadores y agregarle los puntos
    puntosJugadores = [];//reinicializo el puntaje
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);//este for es para definir en el array puntosJugadores cuántos jugadores hay, mirar arriba la const inicializarJuego ahí defino el número de jugares en 2, si pusiera más, el push metería tantas posiciones en 0 como necesitara por ahora me devuelve un array con 2 posiciones
          // console.log({puntosJugadores});
    }

      // Borrar puntajes de la pantalla, uso un ciclo foreach
    puntosHTML.forEach(elem => elem.innerText = 0);
      // recorro cada uno de los elementos del array puntosHTLM y le asigno cero al valor del puntaje

      // Borro las cartas de las pantalla
    divCartasJugadores.forEach(elem => elem.innerHTML = '')

      // Activo los botones pedir y detener
    btnPedir.disabled = false;
    btnDetener.disabled = false; 
}


/* const valor = valorCarta(pedirCarta());//con la función pedir carta agrego el valor de la carta, este código es para verificar que devuelva el valor
    console.log({valor}); 
      */

/** Función para resumir la suma de puntos de los jugadores
   * necesito recibir como argumentos la carta y el número de turno de los jugadores
   * turno, el cero será el primer jugador y el último será la computadora
  */
const acumularPuntos = ( carta, turno ) => {//este código pone el marcador en la pantalla
  
    // console.log('función acumularPuntos carta, turno jugador1', carta, turno);
    
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno]
    return puntosJugadores[turno]
}


const determinarGanador = () => {

      // Para recuperar puntosMinimos y puntosComputadora, hago desestructuración de arreglos y lo extraigo de puntosJugadores; puntos mínimos sería el valor de la variable puntosJugadores en el turno 0 y puntos Computadora sería el valor de esta misma variable en la posición 1; y ambas estarían en la función acumularPuntos
    const [puntosMinimos, puntosComputadora] = puntosJugadores
    
    setTimeout(() => {//con este código envío el mensaje de quién gana e impido que el alert aparezca antes que se muestren las cartas de la computadora
        if (puntosComputadora === puntosMinimos ) {
            alert('Empate, nadie ganó 😒')
        } else if (puntosMinimos > 21){
            alert('La computadora ha ganado')
        } else if(puntosComputadora > 21){
            alert('Has ganado... Felicitaciones!!! 😊')
        } else {
            alert('Ha ganado la computadora')
        }
    }, 1000);
}

  // PROGRAMANDO EVENTOS
  // botón pedir, código para escuchar los eventos con el método addEventListener y le pasamos el parámetro o argumento, hay de varios tipo, focus, click etc; el segundo argumento es una función, es conocida como callback que es una función que se manda como argumento, o una función dentro de otra, puede ser una función tradicional function() {} o una función de flecha () => {}
// 👇 ÉSTE ES EL CÓDIGO DEL LADO DEL JUGADOR

btnPedir.addEventListener('click', () => {//cyando se haga click en el botón se va a dispara el código dentro de la función de flecha
      //console.log('click');//para probar el evento; al precionar el botón pedir cartar se imprime el mensaje click en la consola

      const carta = pedirCarta(deck); //ejecuto la función de pedir carta; con la refactorización por módulos, tenemos que pasarle como argumento el deck
      //console.log(carta);para probar si el código se está ejecutando

      // puntosJugador = puntosJugador + valorCarta(carta);//siempre serán los puntos que tenga el jugador mas el valor de la nueva carta pedida
      // puntosHTML[0].innerText = puntosJugador;//para mostrar en pantalla el score o puntaje
      //console.log(puntosJugador);para verificar que esté sumando correctamente

      // llamo la nueva variable porque la anterior ya no está en uso
    const puntosJugador =  acumularPuntos(carta, puntosJugadores.length - 2);
    // console.log('retorno puntosJugador carta, turno jugador1 carta y turno', carta, turno);
    
    
    crearCarta(carta, puntosJugadores.length - 2, divCartasJugadores)//como tenemos sólo un jugador 0 es la posición del primer jugador


      // para hacer que las cartas aparezcan en el navegador, debo crear una nueva carta cada vez que pida una carta

    /** <img class="carta" src="assets/cartas/10D.png"></img>
       * primero creamos el contenedor img
       * luego el src que es la ruta donde está la imagen
       * luego le damos estilos con la clase carta
      */

    /** YA NO NECESITO ESTE CÓDIGO PORQUE SE HACE EN LA FUNCIÓN crearCarta
    
    const imgCarta = document.createElement('img')//este código sólo crea el contenedor de la imagen, no trae la imagen misma;

    imgCarta.src = `assets/cartas/${carta}.png`//con comillas invertidas puedo poner la variable de la carta escogida dentro de la ruta, este si trae la carta al contenedor

    imgCarta.classList.add('carta')//le da estilos a la carta

      divCartasJugador.append(imgCarta);// inserto la carta en el documento HTML de manera dinámica */

      // Código para condicionar si el jugador ganó o perdió y bloquear botones y ceder el turno a la computadora
    if (puntosJugador > 21){
        console.warn('Has perdido');
        btnPedir.disabled = true;//código para desabilitar botón para pedir carta
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, deck,  acumularPuntos,  puntosJugadores, divCartasJugadores, determinarGanador);//sedo el turno a la computadora y le envío los puntos del jugador
    /*}else if (puntosComputadora === puntosMinimos ){
        console.warn('Empate, por lo menos no perdiste!');
        btnPedir.disabled = true;//código para desabilitar botón para pedir carta
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);//sedo el turno a la computadora y le envío los puntos del jugador*/
    }else if (puntosJugador === 21){
        console.warn('21 puntos, Genial!');
        btnPedir.disabled = true;//estos botones se desabilitan automáticamente cuando el jugador llega a 21 puntos
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, deck, acumularPuntos, puntosJugadores, divCartasJugadores, determinarGanador)//sedo el turno
        
    }
});

btnDetener.addEventListener('click', () => { 

    //este código es para desactivar los botones y ceder el turno cuando el jugador llega cerca a los 21 y no quiere seguir pidiendo cartas
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    const [puntosMinimos] = puntosJugadores//desestructuro puntosJugadores, para poderle pasar la const puntosMinimos al turno de la computadora, que sería lo mismo que puntosJugador
    
    turnoComputadora(puntosMinimos, deck,  acumularPuntos, puntosJugadores, divCartasJugadores, determinarGanador);
})
// console.log(divCartasJugadores);

  // código para resetear la página para empezar un nuevo juego
btnNuevo.addEventListener('click', () => {

    inicializarJuego();        
})
  //si necesito compartir algún acceso a mi código o aplicación debo retornar esa función en un objeto dentro del return, sólo esto va a ser público y visible para la consola
return {
    nuevoJuego: inicializarJuego
};
})();


