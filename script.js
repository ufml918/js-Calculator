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

//check i/o
let mouse = false;
let keyboard = true;

//inputs
function mouseAction(){
    //on click
    buttoms.addEventListener("mousedown",(e)=>{
        mouse = true;
        addNum(e);
        addFunc(e);
        addOp(e);
    })

    //not clicking
    buttoms.addEventListener("mouseup",(e) => {
        mouse = false;
        e.target.classList.remove("onClick")
    })  
}

function keyboardAction(){
    // keyboard typing
    document.addEventListener("keydown",(e)=>{
        keyboard = true;
        addNum(e);
        addFunc(e);
        addOp(e); 
    })

    //not typing
    document.addEventListener("keyup",(e)=>{
        keyboard = false;
        numbers.forEach(element => {rmDisplay(element,e);});
        functions.forEach(element => {rmDisplay(element,e);});
        operators.forEach(element => {rmDisplay(element,e);});  
    })
}

//use in listener
function addNum(e){
    numbers.forEach(element => {
        if(element.innerText === e.target.innerText || element.innerText === e.key){
            element.classList.add("onClick");
            if(mouse === true){
               getNumByMouse(e); 
            }else if(keyboard === true){
                getNumByBoard(e)
            }
            display.innerText = tempNum;  
        }
    });
}

function addFunc(e){
    functions.forEach(element => {
        if(element.innerText === e.target.innerText || element.innerText === e.key){
            element.classList.add("onClick");
            del(e)
        }
    });
}

function addOp(e){
    operators.forEach(element => {
        if(element.innerText === e.target.innerText || element.innerText === e.key){
            element.classList.add("onClick");   
            if(mouse === true){
                getOperByMouse(e);
            }else if(keyboard === true){
                getOperByBoard(e)
            }
            display.innerText = oper;         
        }
    });
}

//remove display
function rmDisplay(e1,e2){
    if(e1.innerText === e2.key){
        e1.classList.remove("onClick");
    }
}

//get numbers
function getNumByMouse(e){
    return tempNum === 0 ? tempNum = e.target.innerText : tempNum += e.target.innerText;
}

function getNumByBoard(e){
    return tempNum === 0 ? tempNum = e.key : tempNum += e.key;
}

//use funtionality
function del(e){
    if(e.target.innerText === "Backspace"){
        tempNum = tempNum.slice(0,-1);
        if(tempNum <= 0){
            tempNum = 0
        }
        display.innerText = tempNum;
        
    }else if(e.target.innerText === "clear"){
        tempNum = 0;
        display.innerText = tempNum;
    }
}

//get operators
function getOperByMouse(e){
    return oper = e.target.innerText;
}

function getOperByBoard(e){
    return oper = e.key;
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



//main function
function main(){
    mouseAction()
    keyboardAction()
}

main()