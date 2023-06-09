// Global Variables
let canvases = document.querySelectorAll('canvas');
let Winner = false;
let Xstatus = false;
let Startgame = null;
let MultiPlayer = null;
let SinglePlayer = null

//Assign Event listener and identifier for its value to all boxes
function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn);
        list[i].setAttribute('data-content', 'Nothing')
    }
}

function Restart(){
    //height and Width
    let gameScreen = document.getElementById('Game-Screen')
    gameScreen.hidden = true;

    let NewFront = document.getElementById('Front')
    NewFront.hidden = false;
    let ScreenStyles = window.getComputedStyle(gameScreen)
    let height = ScreenStyles.getPropertyValue('height');
    NewFront.style.height = height

    //Add Event Listener 
    let Startbtn = document.getElementById('Start')
    Startbtn.addEventListener('click',function(){Start()})
}

// Insert X or O to each box on click
function MakeXO(box){    
    const CanvasHeight = box.height;
    const CanvasWidth = box.width;
    const ctx = box.getContext('2d');
    ctx.font = '10rem Arial';
    if (!Winner){
        if(!Xstatus){
            ctx.fillText('X',(CanvasWidth/2)-60,(CanvasHeight/2)+60);
            box.setAttribute('data-content', 'X')
            Xstatus = true;
        }
        else{
            ctx.fillText('O',(CanvasWidth/2)-60,(CanvasHeight/2)+60);
            Xstatus = false;
            box.setAttribute('data-content', 'O')
    
        }
    }
}

// Clear Boxes

function ClearBoxes (){
    let boxes = document.getElementsByTagName('canvas');
    for (let i=0; i < boxes.length; i++){
        let ctx = boxes[i].getContext('2d')
        ctx.clearRect(0, 0, boxes[i].width, boxes[i].height);
        boxes[i].setAttribute('data-content', 'Nothing')
        Winner = false;
        Xstatus = false;
    }

}

// Check for winner of the game
function GameRules(){
    const DisplayWinner = document.getElementById('Result')
    let boxes = document.querySelectorAll('canvas')
    let box1 = boxes[0].getAttribute('data-content')
    let box2 = boxes[1].getAttribute('data-content')
    let box3 = boxes[2].getAttribute('data-content')
    let box4 = boxes[3].getAttribute('data-content')
    let box5 = boxes[4].getAttribute('data-content')
    let box6 = boxes[5].getAttribute('data-content')
    let box7 = boxes[6].getAttribute('data-content')
    let box8 = boxes[7].getAttribute('data-content')
    let box9 = boxes[8].getAttribute('data-content')

    // Horizontal check for X
    if ((box1 == 'X' && box2 == 'X'  && box3 == 'X')|| (box4 == 'X' && box5 == 'X'  && box6 == 'X') || (box7 == 'X' && box8 == 'X'  && box9 == 'X')){
        Winner = true;
        Restart()
    
        DisplayWinner.innerText = 'X Wins' 
    }
    // Horizontal check for O
    else if ((box1 == 'O' && box2 == 'O'  && box3 == 'O')|| (box4 == 'O' && box5 == 'O'  && box6 == 'O') || (box7 == 'O' && box8 == 'O'  && box9 == 'O')){
        Winner = true;
        Restart()
    
        DisplayWinner.innerText = 'O Wins' 
    } 
    // Vertical Check for X
    else if ((box1 == 'X' && box4 == 'X'  && box7 == 'X')|| (box2 == 'X' && box5 == 'X'  && box8 == 'X') || (box3 == 'X' && box6 == 'X'  && box9 == 'X')){
        Winner = true;
        Restart()
   
        DisplayWinner.innerText = 'X Wins' 
    } 
    //Vertical Check for O
    else if ((box1 == 'O' && box4 == 'O'  && box7 == 'O')|| (box2 == 'O' && box5 == 'O'  && box8 == 'O') || (box3 == 'O' && box6 == 'O'  && box9 == 'O')){
        Winner = true;
        Restart()
     
        DisplayWinner.innerText = 'O Wins' 
    } 
    //Parrallel check for X
    else if ((box1 == 'X' && box5 == 'X'  && box9 == 'X')|| (box3 == 'X' && box5 == 'X'  && box7 == 'X')){
        Winner = true;
        Restart()
        DisplayWinner.innerText = 'X Wins'
    } 
    //Parrallel check for O
    else if ((box1 == 'O' && box5 == 'O'  && box9 == 'O')|| (box3 == 'O' && box5 == 'O'  && box7 == 'O')){
        Winner = true;
        Restart()
    
        DisplayWinner.innerText = 'O Wins' 
    } 
    //Check For Draw
    else{
        let checkDraw = false
        boxes.forEach((i)=>{if(i.getAttribute('data-content')=='Nothing'){checkDraw = true}})
        if(!checkDraw){
            Winner = true;
            Restart()
            DisplayWinner.innerText = '<h1>Draw</h1>' 

        }
    }

    
}

// Combine Rules and Game Test 1

function PlayMultiPlayer(n){
    if (!Winner && n.getAttribute('data-content') =='Nothing'){
        MakeXO(n)
        GameRules()
    }
    
}
// Add the event listener to the start game variable



function Start(){
    let GameDisplay = document.getElementById('Game-Screen')
    let Front = document.getElementById('Front')
    Front.hidden = true
    GameDisplay.hidden = false
    ClearBoxes ()
}

export {MakeXO,addEventListenerList,GameRules, PlayMultiPlayer,canvases, Restart}
