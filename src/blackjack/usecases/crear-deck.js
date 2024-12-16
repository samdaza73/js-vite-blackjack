import _ from 'underscore';//importo la libreria que tiene la función shuffle que revuelve las cartas.

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Eje: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales eje: ['A', 'B', 'C', 'D']
 * @returns {Array<String>} retorna un nuevo deck de cartas 
 * */

// Debemos exportar la función para usarla en el index; esta es la manera de hacerlo de forma independiente
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {//recibo los tipos de carta como argumentos y se los paso a los ciclos for
//const crearDeck = (tiposDeCarta, tiposEspeciales) => {//pero también la puedo exportar por defecto al final del archivo

// Validación para mejorar el código para saber qué tipos de datos estamos enviando y qué tipos de argumentos están recibiendo y deben retornar los otros módulos consulta jsdoc.app
    if (!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('TiposDeCarta es obligatorio como un arreglo de string')//si es null o undefined lanzo un error
    if (!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string')//si es null o undefined lanzo un error

      // reinicializo el deck
    let  deck = [];
      // con un ciclo for podemos recorrer todo el array de cartas, que van del 2 hasta el 10; por eso inicializo i en 2; el ciclo va hasta 10 porque es el último número de la baraja, y por último incrementamos en 1
    for( let i = 2; i <= 10; i++){//con este siclo enumero las cartas del 2 hasta el 10
          //para optimizar este código creamos una constante tipos, y anido un ciclo for of
        for(let tipo of tiposDeCarta){//este ciclo se va a ejecutar una vez por cada uno de los tipos
            deck.push( i + tipo);//la variable tipo, tiene cada una de las letras de la baraja, que se le va a unir a cada uno de los números de la baraja del 2-10
        }
    }

    for(let tipo of tiposDeCarta){//necesito ejecutar un for del arreglo tipo que contiene, trébol, diamante, corazones y espadas, para agregar el haz, la J, Q y la K de cada palo, para eso también ejecuto un for del array especiales
        
        for(let esp of tiposEspeciales){
            deck.push(esp + tipo);
        }

    }
      // console.log(deck);//deck oredenado;
      // console.log(deck);//deck barajado
    //deck = _.shuffle(deck);//invocamos el método shuffle para implementar la librería que revuelve la baraja.  le pasamos como argumento el array deck y lo retornamos
    // return deck;//se puede retornar de esta manera o como lo tenemos abajo


    return _.shuffle(deck);//invocamos el método shuffle para implementar la librería que revuelve la baraja.  le pasamos como argumento el array deck y lo retornamos

    
    // console.log(deck);
    
}

// export default crearDeck;//de esta firna se exporta por defecto