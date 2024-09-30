import { createGameElement } from "./board.js";

const DIST_SALTO = 66;
const MARGIN_FIX = 4;

function Pieces(x, y) {
    this.x = x;
    this.y = y;


    this.nextPosition = function (keycode) {
        let { x, y } = this;

        if (keycode == 'ArrowUp') y--;
        if (keycode == 'ArrowDown') y++;
        if (keycode == 'ArrowRight') x++;
        if (keycode == 'ArrowLeft') x--;

        return { x, y };

    }
    this.moveTo = function (position, element) {

        this.y = position.y;
        this.x = position.x;

        this.element.style.top = calculaPosicao(this.y);
        this.element.style.left = calculaPosicao(this.x);
    }
    this.insertElementInto = function (className, parent) {
        this.element = createGameElement('div', className, parent);

        this.element.style.top = calculaPosicao(this.y);
        this.element.style.left = calculaPosicao(this.x);
    }
    function calculaPosicao(qtd) {
    
        return (qtd * DIST_SALTO + MARGIN_FIX + "px");
    }
}


export default Pieces;