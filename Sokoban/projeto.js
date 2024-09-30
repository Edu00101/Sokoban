import  Pieces from "./pieces.js";
import { buildGameBoard } from "./board.js";
import { boardMap } from "./board.js";

const pieces = buildGameBoard();


const player = new Pieces(pieces.player.x, pieces.player.y);
const board = document.querySelector('.bloco');
const playerElement = createBoardPiece(player, 'player');


function createBoardPiece(piece, className) {

    piece.insertElementInto(className, board);

    return piece.element;
}

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)) {
        player.moveTo(next);
    }
})



function verifyPosition(position) {
    let { x: y, y: x } = position

    return boardMap[x][y] !== '#';
}

