import { buildGameBoard} from "./board.js";
import { lvl0, lvl1, lvl2, lvl3, lvl4, lvl5, lvl6 } from "./leveis.js";

const { boardMap, pieces: { boxes, player }, numberOfGoals } = buildGameBoard(lvl4);

window.addEventListener("keydown", function (event) {
 

    handlePieceMovement(event.code);
});
function findBoxAtPosition(position) {

    return boxes.find((caixa) => caixa.x === position.x && position.y === caixa.y);
}
function handlePieceMovement(keycode) {

    const next = player.nextPosition(keycode);
    
    const caixa = findBoxAtPosition(next);

 
    if (caixa) {
        const nextPositionBox = caixa.nextPosition(keycode);
        const foundBox2 = findBoxAtPosition(nextPositionBox);
        const boxCanMove = verifyPosition(nextPositionBox);

        if (boxCanMove && !foundBox2) {
            caixa.moveTo(nextPositionBox);
            player.moveTo(next);

            if(levelCompleted()) setTimeout(() => alert('Você Venceu!!'), 300);  
        }

    } else {
        const playerCanMove = verifyPosition(next);
        if (playerCanMove) {
            player.moveTo(next);
        }
    }
}


function verifyPosition(position) {
    let { x: y, y: x } = position

    return boardMap[x][y] !== '#';
}

function levelCompleted() {
    let count = 0;

    for (const caixas of boxes) {
        let { x: y, y: x } = caixas;


        if (boardMap[x][y] === 'G') count++
    }
    return count == numberOfGoals;
}

