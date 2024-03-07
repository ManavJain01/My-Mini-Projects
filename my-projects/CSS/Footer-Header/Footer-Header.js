let div = document.getElementById("hiddendiv");
let img = document.querySelector("img");
let bool = true;

let img1 = document.getElementById("img");

if(img1.style.display === "none"){
  div.style.display = "none";
}

function btnClick(){
  if(bool){
    div.style.display = "block";
    img.src = "./Images/cross.jpg";
    bool = false;
  }else{
    div.style.display = "none";
    img.src = "./Images/hamburger.png";
    bool = true;
  }
}