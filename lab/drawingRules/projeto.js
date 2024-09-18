// const bloco2 = document.getElementById('bloco2');
// const M = 8;
// const N = 8;

// for (let X = 0; X < M; X++) {
//     const row = document.createElement('div');
//     row.classList.add('row');

//     for (let Y = 0; Y < N; ++Y) {
//         const cell = document.createElement('div');
//         cell.classList.add('cell');
//         row.appendChild(cell);


function buildGameBoard(numberOfRows, numberOfCollumns, rule) {
    const game = document.getElementById("jogo");
    const board = document.createElement('div');
    board.classList.add('bloco');

    for (let X = 0; X < numberOfRows; X++) {
        const row = document.createElement('div');
        row.classList.add('row');
        board.append(row);

        for (let Y = 0; Y < numberOfCollumns; Y++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.append(cell);
              
            if(rule(cell, numberOfRows, numberOfCollumns, X, Y)){
                cell.classList.add('cell');
            };

        }
    }
    game.append(board);



}


function rule0(cell, numberOfRows, numberOfCollumns, X, Y) {
    if (X <= 4) {
        cell.classList.add('rell');
    }
}
function rule1(cell, numberOfRows, numberOfCollumns, X, Y){
    if(Y == 0){
        cell.classList.add('rell');
    }
}

function rule2(cell, numberOfRows, numberOfCollumns, X, Y){
    if(X == 0){
        cell.classList.add('rell');
    }
}


function rule3(cell, numberOfRows, numberOfCollumns, X, Y) {
    if (X == 0 || Y == 0 || X == numberOfCollumns - 1 || Y == numberOfCollumns - 1) {
        cell.classList.add('rell');
    }
}
function rule4(cell, numberOfRows, numberOfCollumns, X, Y) {
    if (X > 0 && X < numberOfRows - 1 && Y > 0 && Y < numberOfCollumns - 1) {
        cell.classList.add('rell');
    }
}
function rule5(cell, numberOfRows, numberOfCollumns, X, Y) {
    if (X == Y) {
        cell.classList.add('rell')
    }
}
function rule6(cell, numberOfRows, numberOfCollumns, X, Y) {
    if (X + Y == numberOfCollumns - 1) {
        cell.classList.add('rell')
    }
}
function rule7(cell, numberOfRows, numberOfCollumns, X, Y) {
    if (X == Y || X + Y == numberOfCollumns - 1) {
        cell.classList.add('rell')
    }
}
function rule8(cell, numberOfRows, numberOfCollumns, X, Y) {
    if (X + Y % 2 == 0||X + Y % 2 == 2||X + Y % 2 == 4||X + Y % 2 == 6||X + Y % 2 == 8) {
        cell.classList.add('rell');
    }
}
function rule9(cell, numberOfRows, numberOfCollumns, X, Y){
    if(X == 3|| Y == 5){
        cell.classList.add('rell');
    }
}



buildGameBoard(8, 8, rule0);
buildGameBoard(8, 8, rule1);
buildGameBoard(8, 8, rule2);
buildGameBoard(8, 8, rule3);
buildGameBoard(8, 8, rule4);
buildGameBoard(8, 8, rule5);
buildGameBoard(8, 8, rule6);
buildGameBoard(8, 8, rule7);
buildGameBoard(8, 8, rule8);
buildGameBoard(8, 8, rule9);