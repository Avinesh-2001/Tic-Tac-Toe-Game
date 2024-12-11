let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let msgcont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let count = 0;
let container = document.querySelector(".container"); 
let  turnO =  true;
const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const disabe =  () =>{
    for(let box of boxes )
    {
        box.disabled = true;
    }
}
const enable =  () =>{
    for(let box of boxes )
    {
        box.disabled = false;
        box.innerText = ""; 
    }
}
const showwinner = (winner) => {
    msg.innerText = `Congratulation winner is ${winner}`;
    msgcont.classList.remove("hide");
    container.classList.add("hide");
    disabe();
}

const showdraw = () => {
    msg.innerText = `Sorry, It's a draw!`;
    msgcont.classList.remove("hide");
    container.classList.add("hide"); // Hide the game container
};

boxes.forEach((box) =>{
    box.addEventListener("click" ,() => {
        console.log("clicked"); 
        if(turnO){
            box.innerText = "0";
            count++;
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            turnO = true;
            count++;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
     for(let  pattern of winpatterns)
     {
        let posval1 =  boxes[pattern[0]].innerText;
        let posval2 =  boxes[pattern[1]].innerText;
        let posval3 =  boxes[pattern[2]].innerText;

        if(posval1 != "", posval2 != "", posval3 != "")
        {
            if(posval1 === posval2 && posval3 === posval2)
            {
                console.log("winner",posval1);

                showwinner(posval1);
                return;
            }
        }
        if(count === 9)
        {
            showdraw();
        }
     }
}

const resetgame = () =>{
    turnO= true;
    count =0;
    enable();
    msgcont.classList.add("hide");
    container.classList.remove("hide"); 
}

newgame.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
