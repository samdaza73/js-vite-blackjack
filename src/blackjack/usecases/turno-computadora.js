import { crearCarta } from "./crearCarta";
import {  pedirCarta } from "./pedir-carta";

/**
 * 
 * @param {Number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 * @param {} acumularPuntos 
 * @param {HTMLElement} puntosJugadores elementos HTML para mostrar los puntos
 * @param {*} divCartasJugadores 
 * @param {*} determinarGanador 
 */

export const turnoComputadora = ( puntosMinimos, deck,  acumularPuntos, puntosJugadores, divCartasJugadores, determinarGanador ) => {


    if( !puntosMinimos) throw new Error("Puntos mínimos son necesario");
    if( !deck ) throw new Error("El deck es necesario");
    

    let puntosComputadora = 0;//inicializp los puntos de la computadora
    do {
        const carta = pedirCarta(deck);//la computadora va a pedir una carta por lo menos una vez
        
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length -1);//con este código se empieza a acumular y a sumar los puntos de la computadora
        
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);//con este cógido va a crear la carta para mostrarla en pantalla, se envía el valor de la carta, el turno que está defino por .length y al div al cual se le va a montar la imagen de la carta



        /*este ciclo se va a repetir siempre        La segunda condición es
        y cuando los puntos de la computadora       que los puntos mínimos
        sean menores a los puntosMinimos            siempre deben ser 
        que son los del jugador                     iguales o menores a 21*/
    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    determinarGanador();//se ejecuta la función determinar ganador para que salgan los avisos del ganador y perdedor
}