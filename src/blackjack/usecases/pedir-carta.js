    // FUNCIÓN PARA TOMAR UNA CARTA

//sistema de comentarios para documentar o describir lo que hace la función, los argumentos que reciben de qué tipo son y lo que debe retornar
/**
 * 
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna una carta del deck
 */


export const pedirCarta = (deck) => {//exporto la función, recibo el argumento deck
    // console.log(deck);
    
    // Condición para mandar un mensaje cuando no hayan más cartas en la baraja; si deck no existe no llega, o es igual a cero
    if (!deck || deck.length === 0){
        throw 'No hay cartas en el deck'
    }        
        // console.log(deck);
        // console.log(carta);
    return deck.pop();//con este método tomo la última carta de la bajara y la retorno
    
}


//Para mirar si la condición if funciona, Con un ciclo for simulo pedir cartas hasta que se acabe la baraja; al final sale el mensaje del throw
/* for( let i = 0; i <= 70; i++){
    pedirCarta();
} */
// pedirCarta();