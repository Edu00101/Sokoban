const boardMap = [
    ["#", "#", "#", "#", "#", "#", "#", "#"],
    [ "#", ".", ".", ".", ".", ".", ".", "#"],
    [ "#", ".", ".", ".", "#", ".", ".", "#"],
    ["#", ".", "#", "G", ".", ".", ".", "#"],
    ["#", ".", ".", "G", "B", "#", ".", "#"],
    ["#", ".", ".", "#", ".", "B", ".", "#"],
    ["#", ".", ".", "P", ".", ".", ".", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#"]
]

const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;

buildGameBoard(NUM_ROWS, NUM_COLS);
// if(boardMap[0][8] == '#'){
//     .classList.add('.parede')
// }
function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);

    return element;
}

function buildGameBoard(numberOfRows, numberOfCollumns, rule) {
    const game = document.getElementById("jogo");
    const board = createGameElement('div', 'bloco', game);


    for (let X = 0; X < numberOfRows; X++) {
        const row = createGameElement('div', 'row', board);

        for (let Y = 0; Y < numberOfCollumns; Y++) {
            createGameElement('div', 'cell', row);
        };

    }
}

