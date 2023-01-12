const Gameboard = (()=>{
    const gameboard = [null,null,null,null,null,null,null,null,null]
    const gameboardDom = document.querySelectorAll(".gameboard")[0]

    return{gameboard, gameboardDom}
})()

const displayController = (() => {
    function display(){
        document.querySelectorAll(".num-0")[0].innerHTML = Gameboard.gameboard[0]
        document.querySelectorAll(".num-1")[0].innerHTML = Gameboard.gameboard[1]
        document.querySelectorAll(".num-2")[0].innerHTML = Gameboard.gameboard[2]
        document.querySelectorAll(".num-3")[0].innerHTML = Gameboard.gameboard[3]
        document.querySelectorAll(".num-4")[0].innerHTML = Gameboard.gameboard[4]
        document.querySelectorAll(".num-5")[0].innerHTML = Gameboard.gameboard[5]
        document.querySelectorAll(".num-6")[0].innerHTML = Gameboard.gameboard[6]
        document.querySelectorAll(".num-7")[0].innerHTML = Gameboard.gameboard[7]
        document.querySelectorAll(".num-8")[0].innerHTML = Gameboard.gameboard[8]
    }
    display()
    return{display}
})()


var Player = (name, mark) =>{
    this.name = name
    this.mark = mark    
    
    function play(location){
        Gameboard.gameboard[location] = mark 
        displayController.display()
    }   

    return {name, mark, play}
}

const Game = (()=>{
    let moves = 0
    let turn = "player1"

    function move(location){
        if(Gameboard.gameboard[location]==null){
        moves = moves +1
        if(turn=="player1"){
            player1.play(location)
            turn = "player2"
        }else if(turn == "player2" ){
            player2.play(location)
            turn = "player1"
        }
    }
    }
    return {move} 
    
})()

Gameboard.gameboardDom.addEventListener("click", function(event){
    if(event.target.id >= 0 && event.target.id < 9){
        Game.move(event.target.id)
    }
})

    const player1 = Player("player1", "x")
    const player2 = Player("player2", "o") 




