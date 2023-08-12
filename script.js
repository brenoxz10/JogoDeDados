const button = document.querySelector(".sorteio")
const pontComp = document.querySelector(".pont-comp")
const pontJog = document.querySelector(".pont-jog")

let somaComp = 0
let somaJog = 0

function sortearNumeros(){
    somaComp = 0
    somaJog = 0
    return Math.ceil(Math.random()*6)
}

function organizarNumeros(){
    for(i=1; i < 7; i++){
        document.querySelector(".num" + i).innerText = sortearNumeros()
    }
    for(j=1;j<4;j++){
        somaComp += Number(document.querySelector(".num" + j).innerText)
    }
    for(k=4;k<7;k++){
        somaJog += Number(document.querySelector(".num" + k).innerText)
    }
    pontComp.innerText = somaComp;
    pontJog.innerText = somaJog;

    for(i=1; i < 7; i++){
        if(Number(document.querySelector(".num" + i).innerText) === 1){
            document.querySelector(".num" + i).innerHTML = "<img src='./images/dice1.png' alt=''>"
        }else if(Number(document.querySelector(".num" + i).innerText) === 2){
            document.querySelector(".num" + i).innerHTML = "<img src='./images/dice2.png' alt=''>"
        }else if(Number(document.querySelector(".num" + i).innerText) === 3){
            document.querySelector(".num" + i).innerHTML = "<img src='./images/dice3.png' alt=''>"
        }else if(Number(document.querySelector(".num" + i).innerText) === 4){
            document.querySelector(".num" + i).innerHTML = "<img src='./images/dice4.png' alt=''>"
        }else if(Number(document.querySelector(".num" + i).innerText) === 5){
            document.querySelector(".num" + i).innerHTML = "<img src='./images/dice5.png' alt=''>"
        }else if(Number(document.querySelector(".num" + i).innerText) === 6){
            document.querySelector(".num" + i).innerHTML = "<img src='./images/dice6.png' alt=''>"
        }
    }
}

button.addEventListener("click", ()=> organizarNumeros())