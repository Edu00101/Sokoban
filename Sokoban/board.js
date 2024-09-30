export const boardMap = [
    ["#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", ".", ".", ".", ".", ".", ".", "#"],
    ["#", ".", ".", ".", "#", ".", ".", "#"],
    ["#", ".", "#", "G", ".", ".", ".", "#"],
    ["#", ".", ".", "G", "B", "#", ".", "#"],
    ["#", ".", ".", "#", ".", "B", ".", "#"],
    ["#", ".", ".", "P", ".", ".", ".", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#"]

]
const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;

export function buildGameBoard(){
    const game = document.getElementById("jogo");
    const board = createGameElement('div', 'bloco', game);
    const pieces = {
        boxes:[]
    };
    console.log(pieces);


    for (let x = 0; x < NUM_ROWS; x++) {
        const row = createGameElement('div', 'row', board);

        for (let y = 0; y < NUM_COLS; y++) {
            const cell = createGameElement('div', 'cell', row);
            const bir = boardMap[x][y];


            if (bir === '#') cell.classList.add('wall');
            if (bir === 'G') cell.classList.add('goal');
            if (bir === 'B') cell.classList.add('box');
            if (bir === 'R') cell.classList.add('rell');
            if (bir === 'P') pieces.player = { x: x, y: y }
            if (bir === 'B') pieces.boxes.push({x: x, y: y})

        }


    }

    return pieces;
}
export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);

    return element;
}

