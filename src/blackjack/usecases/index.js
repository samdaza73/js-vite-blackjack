// paso todas las importaciones para un solo archivo, para luego hacer una sola desde el index de la aplicación blackjack

//import {crearDeck as crearNuevoDeck} from './usecases/crear-deck'//tambien se puede renombra la función que se importa con un nuevo alias, y lamarla así dentro dle archivo
export { crearCarta } from './crearCarta'
export {crearDeck} from './crear-deck'//como movimos esta función a un módulo aparte debemos importarla
export { pedirCarta } from "./pedir-carta";
export {turnoComputadora} from "./turno-computadora"
export { valorCarta } from "./valor-carta";

// importanción por defecto
// import crearDeck from './usecases/crear-deck';