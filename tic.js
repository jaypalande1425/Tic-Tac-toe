let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newGameBtn=document.querySelector(".newbtn");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector(".msg")

let turnO=true; //playerX , playerY;
let count=0;

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };



boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       if(turnO){
        box.innerText="O";
        turnO=false;
       }else{
        box.innerText="X"
        turnO=true;
       }
        box.disabled = true;
        count++;
       
        let isWinner=checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
          }
        }) 
    })


const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=" "
    }

};

const showWinner=(winner)=>{
    msg.innerText=`Congratutions , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes()
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val){
            if(pos1Val === pos2Val && pos2Val=== pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val)
            }
        }
    }
 };

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);


