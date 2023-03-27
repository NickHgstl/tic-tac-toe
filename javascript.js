const playerFactory = (name, mark, ai, turn, playercomb) => {
    return {name, mark, ai, turn, playercomb};
}
    const player1 = playerFactory('player 1', 'X', false, true, []);
    const player2 = playerFactory('player 2', 'O', false, true, []);

const winningComb = [
    [1,2,3],
    [4,5,6],
    [7,8,9], 
    [1,4,7], 
    [1,5,9], 
    [2,5,8], 
    [3,5,7], 
    [3,6,9]
];
var box = document.querySelector('#table_container');
box.addEventListener('click', function (e) {
    var targetId = e.target.closest('td').id;
    var targetIdInner = e.target.closest('td').innerHTML;
        
    if (player1.turn == true && targetIdInner !== "O" && targetIdInner !== "X") {
        const cell = e.target.closest('td');
        if (!cell) {return;}
        cell.innerHTML = 'X';
        player1.playercomb.push(targetId);
        player1.turn = false;
        player2.turn = true;
        winningCombLoop();
        console.log("player 1: ", player1.playercomb);
    }

    else if (player2.turn == true && targetIdInner !== "X" && targetIdInner !== "O") {
        const cell = e.target.closest('td');
        if (!cell) {return};
        const row = cell.parentElement;
        cell.innerHTML = 'O';
        player2.playercomb.push(targetId);
        player2.turn = false;
        player1.turn = true;
        winningCombLoop();
        console.log("player 2:", player2.playercomb);

    }
})

 var winningCombLoop = function() {
    const p1WinCounter = player1.playercomb.sort().join(',');
    const p2WinCounter = player2.playercomb.sort().join(',');
    
    
    for(i=0; i <= winningComb.length; i++) {
        var actualWin = winningComb[i].sort().join(',');
        console.log(actualWin);
        console.log(player1.playercomb.sort().join(','));
            
        if (p1WinCounter.includes(actualWin)){
            alert("p1 you win");
            location.reload();
            return false;
        }
       
        else if (p2WinCounter.includes(actualWin)) {
            alert("p2 you win");
            location.reload;
            return false;
            
        }
        else if ( player1.playercomb.length == 5 || player2.playercomb.length == 5){            
            alert("TIE!");
            setTimeout(function(){
            location.reload();
            return false;
            }, 5000);
        }
    }
 }
