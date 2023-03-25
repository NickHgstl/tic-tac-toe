const board =(() => {
    const playerFactory = (name, mark, ai, turn) => {
        return {name, mark, ai, turn};
    };

    const player1 = playerFactory('player 1', 'X', false, true);
    const player2 = playerFactory('player 2', 'O', false, true);
})

var lmao = document.querySelectorAll(".grid_item")


for (var i = 0; i < lmao.length; i++) {
    lmao[i].addEventListener('click', (e) => {
        lmao[i].innerHTML += "lmao"
    })

}
