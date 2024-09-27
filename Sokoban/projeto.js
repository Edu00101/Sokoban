
const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;
const DIST_SALTO = 66;
const MARGIN_FIX = 4;
const pices = buildGameBoard(NUM_ROWS, NUM_COLS);


const player = new Player(pices.player.x, pices.player.y);
const board = document.querySelector('.bloco');
const playerElement = createGameElement('div', 'caixa', board);



playerElement.style.top = calculaPosicao(player.x);
playerElement.style.left = calculaPosicao(player.y);

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)) {
        player.moveTo(next, playerElement);
    }
})


function Player(x, y) {
    this.x = x;
    this.y = y;

    this.nextPosition = function (keycode) {
        let { x, y } = this;

        if (keycode == 'ArrowUp') x--;
        if (keycode == 'ArrowDown') x++;
        if (keycode == 'ArrowRight') y++;
        if (keycode == 'ArrowLeft') y--;

        return { x, y };

    }
    this.moveTo = function (position, element) {

        this.x = position.x;
        this.y = position.y;

        element.style.top = calculaPosicao(this.x);
        element.style.left = calculaPosicao(this.y);
    }
}
function verifyPosition(position) {
    let { x, y } = position

    return boardMap[x][y] !== '#';


}

function calculaPosicao(qtd, tamanho) {

    return (qtd * DIST_SALTO + MARGIN_FIX + "px");
}
