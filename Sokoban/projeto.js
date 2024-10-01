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

        createBoardPiece(pieces.boxes[x], 'caixas');
}


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

