
const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;
const DIST_SALTO = 66;
const MARGIN_FIX = 4;

const pieces = buildGameBoard(NUM_ROWS, NUM_COLS);
const board = document.querySelector('.bloco');


const player = new Pieces(pieces.player.x, pieces.player.y);
const element = createBoardPiece(player, 'player');


window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)) {
        player.moveTo(next, element);
    }
})

function createBoardPiece(piece, className) {
    const element = createGameElement('div', className, board);

    element.style.top = calculaPosicao(piece.x);
    element.style.left = calculaPosicao(piece.y);

    return element;
}


function verifyPosition(position) {
    let { x, y } = position

    return boardMap[x][y] !== '#';


}

function calculaPosicao(qtd, tamanho) {

    return (qtd * DIST_SALTO + MARGIN_FIX + "px");
}