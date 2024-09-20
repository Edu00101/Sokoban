

const playerElemnt = document.querySelector('.player');
console.log(playerElemnt);

playerElemnt.addEventListener("click", function () {
    alert("clicou no jogador");
})
window.addEventListener("keydown", function (event) {
    nextPositioin(event.code);
 
})
const cell = document.querySelector('.cell');
console.log(cell);


function nextPositioin(keycode) {
    if (keycode == 'ArrowUp') player.X--;
    if (keycode == 'ArrowDown') player.X++;
    if (keycode == 'ArrowRight')player.Y--;
        if (keycode == 'ArrowLeft')player.Y++;
    
    console.log(keycode, player);
}
function Player(X, Y) {
    this.x = X;
    this.y = Y;
}

const player = new Player(0, 0);