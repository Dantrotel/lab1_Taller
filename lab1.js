const gameOfLife = require('./lib/gameCore.js');

/**
 * INSERTAR LOGICA INICIAL SEGUN MANUAL DEL README.MD!!
 * el codigo va despues de este comentario
 */

console.log("JUEGO DE LA VIDA");

let Matriz = gameOfLife.crearTablero(20);

gameOfLife.insertCelula(Matriz,1,1);

gameOfLife.insertCelula(Matriz,1,2);

gameOfLife.insertCelula(Matriz,1,3);

gameOfLife.imprimirMatriz(Matriz);

gameOfLife.iniciarJuego(Matriz,1000);