window.addEventListener("keydown", function (event) {
    const next = nextPosition(event.code);

    if (verifyPosition(next)) movePlayer(next);
})


function Player(X, Y) {
    this.x = X;
    this.y = Y;
}
const player = new Player(0, 0);

const celulas = document.querySelectorAll('.cell');
console.log(celulas);
const playerElement = document.querySelector('.player');
console.log(playerElement);




function nextPosition(keycode) {
    let { x, y } = player;

    if (keycode == 'ArrowUp') x--;
    if (keycode == 'ArrowDown') x++;
    if (keycode == 'ArrowRight') y++;
    if (keycode == 'ArrowLeft') y--;
    console.log(x, y);

    return { x, y };

}


function movePlayer(position) {
    let { x, y } = position
    player.x = x
    player.y = y

    const K = x * 4 + y;

    celulas[K].append(playerElement);
}


function verifyPosition(position) {
    let { x, y } = position

    return x >= 0 && x < 4 && y >= 0 && y < 4


}

