//for display
let display = document.querySelector('.display');
let opDisplay = document.querySelector('.opDisplay');
let preDisplay = document.querySelector('.preNum');
const buttoms = document.querySelector('.buttons');
const numbers = document.querySelectorAll('.number');
const functions = document.querySelectorAll('.function');
const operators = document.querySelectorAll('.operator');

//for calculate
let tempNum = 0;
let preNum = 0;
let nowOper = '';
let preOper = '';

//check i/o
let mouse = false;
let keyboard = false;

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
        //deal with =
        if(tempNum !== 0 && nowOper === '='){
            preNum = tempNum;
        }

        if(element.innerText === e.target.innerText || element.innerText === e.key){
            element.classList.add("onClick");   
            if(mouse === true){
                getOperByMouse(e);
            }else if(keyboard === true){
                getOperByBoard(e)
            }

            //change the display
            opDisplay.innerText = nowOper; 
            calculate(parseFloat(tempNum),preOper)
            tempNum = 0;
            display.innerText = tempNum;
            preDisplay.innerText = preNum;        
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
        nowOper = '';
        preOper = '';
        preNum = 0;
        preDisplay.innerText = preNum;
    }
}

//get operators
function getOperByMouse(e){
    preOper = nowOper;
    return nowOper = e.target.innerText;
}

function getOperByBoard(e){
    preOper = nowOper;
    return nowOper = e.key;
}

//calculations
function calculate(a,oper){
    switch(oper){
        case '+':
            add(a);
            break;

        case '-':
            sub(a);
            break;

        case '*':
            mul(a);
            break;

        case '/':
            div(a);
            break;

        case '':
            preNum = a;
            break;


    }
}

function add(a){
    return preNum += a;
}

function sub(a){
    return preNum -= a;
}

function mul(a){
    return preNum *= a;
}

function div(a){
    return preNum /= a;
}



//main function
function main(){
    mouseAction()
    keyboardAction()
}

main()

