let Usercounter = 0;
let Comcounter = 0;
let Drawcounter = 0;


//--------------------------------------------------------------------------------------------------------------------------------------
function getRandom(min, max){
  return min + Math.floor(Math.random() * (max - min + 1));
}

let num;
let msg="";

rock = document.getElementById('rockBtn');
rock.addEventListener("click", rockBtn);
function rockBtn(){
  num = getRandom(1,3);
  if (num == 1) {
    Drawcounter++;
    msg = `                     Draw!!!
    Total Wins:${Usercounter}, Total Loses:${Comcounter}, Total Draws:${Drawcounter}.`
  }else if(num == 2) {
    Comcounter++;
    msg =`                      You Lose!!!
    Total Wins:${Usercounter}, Total Loses:${Comcounter}, Total Draws:${Drawcounter}.`
  }else if(num == 3){
    Usercounter++;
    msg = `                     You Win!!!
    Total Wins:${Usercounter}, Total Loses:${Comcounter}, Total Draws:${Drawcounter}.`
  }

  result();
}

paper = document.getElementById('paperBtn');
paper.addEventListener("click", paperBtn);
function paperBtn(){
  num = getRandom(1,3);
  if (num == 1) {
    Usercounter++;
    msg = `                     You Win!!!
    Total Wins:${Usercounter}, Total Loses:${Comcounter}, Total Draws:${Drawcounter}.`
  }else if(num == 2) {
    Drawcounter++;
    msg = `                     Draw!!!
    Total Wins:${Usercounter}, Total Loses:${Comcounter}, Total Draws:${Drawcounter}.`
  }else if(num == 3){
    Comcounter++;
    msg = `                     You Lose!!!
    Total Wins:${Usercounter}, Total Loses:${Comcounter}, Total Draws:${Drawcounter}.`
  }

  result();
}

scissor = document.getElementById('scissorBtn');
scissor.addEventListener("click", scissorBtn);
function scissorBtn(){
  num = getRandom(1,3);
  if (num == 1) {
    Comcounter++;
    msg = `                     You Lose!!!
    Total Wins:${Usercounter}, Total Loses:${Comcounter}, Total Draws:${Drawcounter}.`
  }else if(num == 2) {
    Usercounter++;
    msg = `                     You Win!!!
    Total Wins:${Usercounter}, Total Loses:${Comcounter}, Total Draws:${Drawcounter}.`
  }else if(num == 3){
    Drawcounter++;
    msg = `                     Draw!!!
    Total Wins:${Usercounter}, Total Loses:${Comcounter}, Total Draws:${Drawcounter}.`
  }

  result();
}

function result(){
  alert(`${msg}`);
}