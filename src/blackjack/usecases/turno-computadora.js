import { pedirCarta, crearCarta } from "./";

 // TURNO DE LA COMPUTADORA

/**
 * 
 * @param {Number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 * @param {boolean} determinarGanador regresa un string con un mensaje de quién ganó
 */

//recibimos los argumentos necesarios para el funcionamiento, declaramos el deck como un arreglo vacío
export const turnoComputadora = (puntosMinimos, deck, acumularPuntos, puntosJugadores, divCartasJugadores, determinarGanador) => {
        
    let puntosComputadora = 0;//lo inicializo en cero

    if(!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if(!deck || deck == undefined) throw new Error('el deck no llegó');
    
      // Uso el ciclo do-while porque debo ejecutar por lo menos una vez que la computadora seleccione una carta
    do {
        const carta = pedirCarta(deck);//le pasamos como argumento el deck
          // este código es para que la computadora saque por lo menos una carta; este código ya no lo usamos se modificó y se puso en la función acumularpuntos
          // puntosComputadora = puntosComputadora + valorCarta(carta);
          // puntosHTML[1].innerText = puntosComputadora

          // Ejecuto la función acumularPuntos que reemplaza el código de puntosComputadora; como el arreglo tiene dos posiciones la 0 y la 1, de esta manera estaría enviando la posición 1 que corresponde a la de la computadora
        // console.log(carta);
        
        
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores)//el length -1 identifica a la computadora por ser el último turno

        /* const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
          divCartasComputadora.append(imgCarta); */
          // console.log(typeof puntosComputadora);

    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));//estas condiciones son para que la computadora saque cartas hasta sacar más puntos que el jugador y la segunda es para que si el jugador sacó más de 21 la computadora no trate de igualar este puntaje y saque cartas sólo hasta llegar a 21
    

    determinarGanador(); 

}