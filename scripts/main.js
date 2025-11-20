var move = 0;
rules = [
    [0, 0, 1],
    [1, 0, 0],
    [0, 1, 0]
];

window.addEventListener("load", () => {
    localStorage.clear();
    localStorage.setItem("move", 3);

    var $playBtn = document.getElementById("play");

    var $rock = document.getElementById("rock");
    var $paper = document.getElementById("paper");
    var $cisor = document.getElementById("cisors");

    var game = new Game(rules);

    $rock.addEventListener("click", () => {
        move = 0;
        localStorage.setItem("move", 0);
    })
    $paper.addEventListener("click", () => {
        move = 1;
        localStorage.setItem("move", 1);
    })
    $cisor.addEventListener("click", () => {
        move = 2;
        localStorage.setItem("move", 2);
    })

    $playBtn.addEventListener("click", (e) => {
        e.preventDefault();
        var playerMove = localStorage.getItem("move");

        if(playerMove >= 0 && playerMove <= 2)
        {
            game.CheckMove(playerMove);
        }
    })
})
