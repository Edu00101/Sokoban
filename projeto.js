function Player(X, Y) {
    this.x = X;
    this.y = Y;
}
const player = new Player(0, 0);


const playerElement = document.querySelector('.player');
console.log(playerElement);

const celulas = document.querySelectorAll('.cell');
console.log(celulas);


window.addEventListener("keydown", function (event) {
    
    console.log(event.code);
   
    nextPositioin(event.code);
})

function nextPositioin(keycode) {
    if (keycode == 'ArrowUp') player.x--;
    if (keycode == 'ArrowDown') player.x++;
    if (keycode == 'ArrowRight') player.y++;
    if (keycode == 'ArrowLeft') player.y--;

    console.log(keycode, player);

    const K = player.x * 4 + player.y;

    celulas[K].append(playerElement);
}

