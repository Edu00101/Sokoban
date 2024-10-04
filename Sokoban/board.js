import Pieces from "./pieces.js"

export function buildGameBoard(level) {
    const boardMap = level.trim().split('\n');

    const game = document.getElementById("jogo");
    const board = createGameElement('div', 'bloco', game);
    
    let numberOfGoals = 0, boxes = [], player = null; 

    for (let x = 0; x < boardMap.length; x++) {
        const row = createGameElement('div', 'row', board);

        for (let y = 0; y < boardMap[x].length; y++) {
            const cell = createGameElement('div', 'cell', row);


            const bir = boardMap[x][y];
            const position = { x: y, y: x }

            if (bir === '#') cell.classList.add('wall');
            if (bir === 'R') cell.classList.add('rell');
            if (bir === '_') cell.classList.add('rell');
            if (bir === 'P') player = createBoardPiece(position, 'player');
            if (bir === 'B') boxes.push(createBoardPiece(position, 'caixas'));
            if (bir === 'G') {
                cell.classList.add('goal')
                numberOfGoals++;
            }
        }
    }

    return { boardMap, pieces: { boxes, player }, numberOfGoals };
}
export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);

    return element;
}


function createBoardPiece(piecePosition, className) {
    const board = document.querySelector('.bloco');
    const pieces = new Pieces(piecePosition.x, piecePosition.y);
    
    pieces.insertElementInto(className, board);

    return pieces;
}