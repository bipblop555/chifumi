class Game {

    constructor(rules)
    {
        this.rules = rules;
    }

    GetRandomInt(){
        return Math.floor(Math.random() * 3);
    }

    CheckMove(playerOneMove){
        var cpu = this.GetRandomInt();

        if(playerOneMove == cpu){
            console.log(`Égalité, coups j1 :${playerOneMove}, coups cpu : ${cpu}`);
        }
        else if(rules[playerOneMove][cpu] == 1){
            console.log(`Joueur 1 gagne, coups j1 : ${playerOneMove}, coups cpu : ${cpu}`);
        }
        else {
            console.log(`Joueur 2 gagne, coups j1 : ${playerOneMove}, coups cpu : ${cpu}`)
        }
    }
}