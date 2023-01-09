let messageEl = document.getElementById("mesage-el")
let sumEl=document.querySelector("#sum-el") //same as getelemnt
let cardEl=document.querySelector(".card-el")
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
console.log(messageEl);

let player = {
    name:"pj",chips:145
}

let playerEl=document.querySelector("#player-el")

function randomCard(){
    let randnum=Math.floor(Math.random()*13)+1
    if(randnum===1){
        return 11
    }
    else if(randnum>10){
        return 10
    }
    else{
        return randnum
    }
}

function startGame()
{
    let firstCard=randomCard()
    let secondCard=randomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    isAlive=true
    renderGame()
}
    function renderGame(){
    cardEl.textContent="Cards :"
    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i]+" "
    }
    sumEl.textContent="Sum :"+sum
    if (sum <= 20)
    {
        message="Do you want to draw a new card"
    }
    else if(sum===21){
        message="wohooo!  You've got Blackjack"
        hasBlackJack=true;
        playerEl.textContent="Congrats!  "+player.name+" : $"+player.chips

    }
    else{
        message="You're out of the game"
        isAlive=false
    }
    messageEl.textContent = message
}
function newCard(){
    if(isAlive && !hasBlackJack){
    console.log("Drawing a new card to deck");
    let card=randomCard()
    sum+=card
    cards.push(card)
    renderGame()
}
}


