import Pieces from "./pieces.js";
import { buildGameBoard, createGameElement } from "./board.js";
import { boardMap } from "./board.js";

const pieces = buildGameBoard();

console.log(pieces);

const board = document.querySelector('.bloco');
const player = createBoardPiece(pieces.player, 'player');
const boxes = [];


function createBoardPiece(piecePosition, className) {
    const piece = new Pieces(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board);

    return piece;
}


for (let x = 0; x < pieces.boxes.length; x++) {
        let piece = createBoardPiece(pieces.boxes[x], 'caixas');
        boxes.push(piece);
}


window.addEventListener("keydown", function (event) {
    // event.preventDefault();

    handlePieceMovement(event.code);
});

/** Tarefa #1: implementar função para localizar uma caixa à partir de um
 * uma dada coordenada.
*/
function findBoxAtPosition(position) {
    // modificar linha(s) de código abaixo
    return boxes.find((caixa) => caixa.x === position.x && position.y === caixa.y);
    
}

console.log(findBoxAtPosition({x:5, y:5}));
console.log(findBoxAtPosition({x:3, y:3}));
console.log(findBoxAtPosition({x:4, y:4}));

window.addEventListener("keydown", function (event) {
    const next = playerPiece.nextPosition(event.code);

    if (verifyPosition(next)) {
        playerPiece.moveTo(next);
    }
})



function verifyPosition(position) {
    let { x: y, y: x } = position

    return boardMap[x][y] !== '#';
}

