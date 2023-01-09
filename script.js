const Gameboard = (()=>{
    const gameboard = ["o","x","o","x","o","x","o","x","o"]

    return{gameboard}
})()

const displayController = (() => {
    const num0 = document.querySelectorAll(".num-0")[0]
    const num1 = document.querySelectorAll(".num-1")[0]
    const num2 = document.querySelectorAll(".num-2")[0]
    const num3 = document.querySelectorAll(".num-3")[0]
    const num4 = document.querySelectorAll(".num-4")[0]
    const num5 = document.querySelectorAll(".num-5")[0]
    const num6 = document.querySelectorAll(".num-6")[0]
    const num7 = document.querySelectorAll(".num-7")[0]
    const num8 = document.querySelectorAll(".num-8")[0]


    num0.innerHTML = Gameboard.gameboard[0]
    num1.innerHTML = Gameboard.gameboard[1]
    num2.innerHTML = Gameboard.gameboard[2]
    num3.innerHTML = Gameboard.gameboard[3]
    num4.innerHTML = Gameboard.gameboard[4]
    num5.innerHTML = Gameboard.gameboard[5]
    num6.innerHTML = Gameboard.gameboard[6]
    num7.innerHTML = Gameboard.gameboard[7]
    num8.innerHTML = Gameboard.gameboard[8]

})()


var Player = (function(name, mark){
    this.name = name
    this.mark = mark
    
    function play(location){
        if(Gameboard.game=""){
            Gameboard.game[location] = mark 
        } else {
            console.log("cannot mark that")
        }
    }

})()


