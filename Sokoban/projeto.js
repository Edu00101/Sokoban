import Pieces from "./pieces.js";
import { buildGameBoard} from "./board.js";
import { lvl0, lvl1, lvl2, lvl3, lvl4, lvl5, lvl6 } from "./leveis.js";

const { boardMap, pieces, numberOfRows } = buildGameBoard(lvl4);//mudar o level aqui


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
function findBoxAtPosition(position) {

    return boxes.find((caixa) => caixa.x === position.x && position.y === caixa.y);
}
function handlePieceMovement(keycode) {
    // Variável destinada ao pré-cálculo da posição do jogador
    const next = player.nextPosition(keycode);
    // (Modificar) Variável para detectar a "presença" de outra peça
    const caixa = findBoxAtPosition(next);

    // Implementar lógica caso encontre uma outra peça no caminho.
    if (caixa) {
        const nextPositionBox = caixa.nextPosition(keycode);
        const foundBox2 = findBoxAtPosition(nextPositionBox);
        const boxCanMove = verifyPosition(nextPositionBox);

        if (boxCanMove && !foundBox2) {
            caixa.moveTo(nextPositionBox);
            player.moveTo(next);

            const caixasCertas = contagemDeCx();

            console.log(caixasCertas);
            if (caixasCertas == numberOfRows) {
                setTimeout(levantaPlaquinha, 500);
            }
        }

    }
    // E caso não encontre outra peça...
    else {
        // Faça as modificações que forem necessárias para manter o
        // funcionamento do jogo.
        if (verifyPosition(next)) {
            player.moveTo(next);
        }
    }
}


function verifyPosition(position) {
    let { x: y, y: x } = position

    return boardMap[x][y] !== '#';
}

function contagemDeCx() {
    let count = 0;

    for (const caixas of boxes) {
        let { x: y, y: x } = caixas;


        if (boardMap[x][y] === 'G') count++
    }
    return count;
}
function levantaPlaquinha() {
    alert('Você Venceu!!');
}
