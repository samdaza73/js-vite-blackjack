/**
 * 
 * @param {String} carta es el nombre de la carta
 * @param {number} turno es el número de turno del jugador o la computadora
 * @returns {imgCarta} regresa la imagen de una carta
 */

 // CREAR CARTA, el turno es para saber qué jugador está jugando
export const crearCarta = (carta, turno, divCartasJugadores) => {//el turno identifica el jugador que está jugando o si es la computadora
    // console.log('crearCarta turno', carta, turno, divCartasJugadores);
        
    if (!carta) throw new Error("La carta es un argumento obligatorio");
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);//aquí determino a qué jugador y div va la carta que acabo de crear, si a un jugador o a la computadora

    return imgCarta
}