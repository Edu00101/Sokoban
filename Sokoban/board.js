export function buildGameBoard(level) {
    const boardMap = level.trim().split('\n');
    const game = document.getElementById("jogo");
    const board = createGameElement('div', 'bloco', game);
    const pieces = {
        boxes: []
    };
    let numberOfGoals = 0;
    const NUM_ROWS = boardMap.length;


    for (let x = 0; x < NUM_ROWS; x++) {
        const row = createGameElement('div', 'row', board);
        const NUM_COLS = boardMap[x].length;

        for (let y = 0; y < NUM_COLS; y++) {
            const cell = createGameElement('div', 'cell', row);


            const bir = boardMap[x][y];
            const position = { x: y, y: x }

            if (bir === '#') cell.classList.add('wall');
            if (bir === 'R') cell.classList.add('rell');
            if (bir === '_') cell.classList.add('rell');
            if (bir === 'P') pieces.player = position;
            if (bir === 'B') pieces.boxes.push(position);
            if (bir === 'G') {
                cell.classList.add('goal')
                numberOfGoals++;
            };

        }
    }

    return { boardMap, pieces, numberOfGoals };
}
export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);

    return element;
}

