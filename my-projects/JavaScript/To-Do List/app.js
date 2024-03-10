const taskAdd = document.getElementById('taskAdd');
const section = document.getElementById("lists");

function AddTask(){
  if(taskAdd.value === ""){
    alert('You must write something.');
  }else{
    const input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute('onclick','CompleteTask(this)');

    const p = document.createElement("p");
    p.innerHTML = taskAdd.value;

    const img = document.createElement("img");
    img.src = "./Images/close.png";

    const button = document.createElement("button");
    button.appendChild(img)
    button.setAttribute('onclick','RemoveTask(this)');


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


function RemoveTask(e){
  e.parentElement.remove();
  saveData();
}

function CompleteTask(e){
  if(e.checked == true) {
    e.value = "True"; 
    e.parentElement.classList.add("checked");
  }else{
    e.parentElement.classList.remove("checked");
  }
  saveData();
}