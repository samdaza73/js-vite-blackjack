
/**
 * obtener el valor de la carta
 * @param {String} carta 
 * @returns {Number} que es el valor de la carta
 */

export const valorCarta = (carta) => {
    //el método substring regresa un nuevo string cortado en base a la posición inicial y una final que podemos definir; voy a cortar de la posición 0 y la siguiente posición obviando la última letra; esto es indispensable para cortar los números de las cartas con 2 dígitos como el 10;
    const valor = carta.substring( 0, carta.length - 1)
    return ( isNaN(valor) ) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;
            
}
            