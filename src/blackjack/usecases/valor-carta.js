// Función para saber el valor de la carta que pedí

/**
 * Obtener el valor de la carta
 * @param {String} carta 
 * @returns {Number} valor de la carta
 */

export const valorCarta = (carta) => {
    // extraer el primer caracter del nombre de la carta
    /* const valor = carta[0];//como el valor de carta es un string, extraigo el caracter que está en la primera posición; esto funciona para las cartas que tienen números de un solo dígito, pero con las que tienen dos dígitos como el 10 no funciona, por eso vamos a usar otro método */
const valor = carta.substring(0, carta.length - 1);//con este método puedo cortar los caracteres que estén antes del último caracter; voy a cortar desde la posición 0 hasta la posición del largo del arreglo menos 1
    // console.log({valor});
/* let puntos = 0;//para simular los puntos de la carta

if( isNaN(valor) ) {//este método me permite saber si en el string que estoy cortando hay un número o no, lo que devuelve es un true o un false; en esta parte devolverá los caracteres que sean letras
        // console.log('No es un número');
    puntos =  (valor === 'A') ? 11 : 10;//con este operador ternario estoy preguntando que si el valor tiene la letra A vale 11 pero si es cualquier otra letra vale 10; aquí los números son tipo number
}else{
    console.log('Es un número');//en esta parte devolverá la parte que sea números, pero los devuelve como tipo string
        puntos = valor * 1;//se multiplica por 1 para convertir el número tipo string a número tipo number
}
    console.log(puntos); */



    // OTRA MANERA DE EJECUTAR ESTE CÓDIGO USANDO EL RETURN SERÍA
return ( isNaN(valor)) ?//pregunto por el tipo de valor de la constante valor; y si no es un número, evalúo con una nueva condición ternaria.
        (valor === 'A') ? 11 : 10//si es un as vale 10, si es cualquier otra leta J Q K vale 10
            : valor * 1; //si no es ninguna de las letra anteriores es un número, pero nos viene en tipo string y hay que convertirlo a tipo number multiplicándolo por 1
}