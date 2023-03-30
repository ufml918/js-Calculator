//for display
let display = document.querySelector('.display');
const buttoms = document.querySelector('.buttons');
const numbers = document.querySelectorAll('.number');
const functions = document.querySelectorAll('.function');
const operators = document.querySelectorAll('.operator');

//for calculate
let tempNum = 0;
let preNum = 0;
let oper;

//inputs
function mouseAction(){
    //on click
    buttoms.addEventListener("mousedown", (e) => {
        e.target.classList.add("onClick");       
    })

    //not clicking
    buttoms.addEventListener("mouseup",(e) => {
        e.target.classList.remove("onClick")
    })  
}

function keyboardAction(){
    //keyboard typing
    document.addEventListener("keydown",(e)=>{
        numbers.forEach(element => {
            if(element.innerText === e.key){
                element.classList.add("onClick");
            }
        });

        functions.forEach(element => {
            if(element.innerText === e.key){
                element.classList.add("onClick");
            }
        });

        operators.forEach(element => {
            if(element.innerText === e.key){
                element.classList.add("onClick");
            }
        });  
    })

    //not typing
    document.addEventListener("keyup",(e)=>{
        numbers.forEach(element => {
            if(element.innerText === e.key){
                element.classList.remove("onClick");
            }
        });

        functions.forEach(element => {
            if(element.innerText === e.key){
                element.classList.remove("onClick");
            }
        });

        operators.forEach(element => {
            if(element.innerText === e.key){
                element.classList.remove("onClick");
            }
        });  
    })
}

//calculations
function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function main(){
    mouseAction()
    keyboardAction()
}

main()