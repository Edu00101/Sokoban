function buildGameBoard(numberOfRows, numberOfCollumns) {
    const game = document.getElementById("jogo");
    const board = createGameElement('div', 'bloco', game);
    const pices = {};


    for (let x = 0; x < numberOfRows; x++) {
        const row = createGameElement('div', 'row', board);

        for (let y = 0; y < numberOfCollumns; y++) {
            const cell = createGameElement('div', 'cell', row);
            const bir = boardMap[x][y];


            if (bir === '#') cell.classList.add('wall');
            if (bir === 'G') cell.classList.add('goal');
            if (bir === 'B') cell.classList.add('box');
            if (bir === 'P') pices.player = { x: x, y: y }
        }


    }

    return pices;
}
function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);

    return element;
}

