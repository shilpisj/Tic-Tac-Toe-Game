let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// let msg1 = document.querySelector("#msg1");

let turnO=true;
let count = 0;
let winnerPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame= () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText="O";
            turnO =false;
            count++;
            
        }else{
            box.innerText="X";
            turnO= true;
            count++;
        }
        // count++;
        box.disabled = true;
        checkWinner(count);
    });  
});


const DrawGame = (count) =>{
    if (count === 9){
    //   count = 0;
      msg.innerText = "The game is Draw";  
      msgContainer.classList.remove("hide");     
    }
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
        count = 0;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        count = 0;
    }
};
const showWinner = (winner) => {
    // count = 0;
    msg.innerText = `Congratulations, Your Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
};

const checkWinner =  (count) => {
    for(let pattern of winnerPattern){
        // console.log(pattern);
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1!="" && pos2!="", pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner is ", pos1);
                showWinner(pos1);
            }
            // else{
            //     DrawGame();
            // }
        }
        DrawGame(count);
    } 
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);