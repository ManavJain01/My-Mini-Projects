const taskAdd = document.getElementById('taskAdd');
const section = document.getElementById("lists");

function AddTask(){
  if(taskAdd.value === ""){
    alert('You must write something.');
  }else{
    const input = document.createElement("input");
    input.type = "checkbox";

    const p = document.createElement("p");
    p.innerHTML = taskAdd.value;

    const img = document.createElement("img");
    img.src = "./Images/close.png";

    const button = document.createElement("button");
    button.appendChild(img)


    let li = document.createElement("li");
    li.className = "singleList";
    li.appendChild(input);
    li.appendChild(p);
    li.appendChild(button);

    section.appendChild(li);
  }

  taskAdd.value = "";
  saveData();
}

function saveData(){
  localStorage.setItem("data", section.innerHTML);
}
function showTask(){
  section.innerHTML = localStorage.getItem("data");
}

showTask();

let check = document.getElementsByClassName("check");
console.log(check);