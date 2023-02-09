console.log("welcome to Tic Tac Toe")
let music=new Audio("zero.mp3")
let audioTurn=new Audio("zero.mp3")
let gameover=new Audio("gameover.mp3")
let shinchan=new Audio("Shinchan.mp3")
let turn='X'
let isgameover=false;

//shinchan.play();

//function to change the turn
const changeTurn=()=>{
    return turn==="X"?0:"X"} 

//Function to check a win
const checkWin =()=>{
let boxtexts=document.getElementsByClassName('boxtext')
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
win.forEach(e=>{
    if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "") )
    {
        document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
        isgameover=true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
    }
})
}

//Game Logic
//shinchan.play();
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover)
            {
            document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
            
            }
        }
    })
})

//add onclick listiner  to reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
    element.innerText=""
    });

    turn="X";
    isgameover=false
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})
