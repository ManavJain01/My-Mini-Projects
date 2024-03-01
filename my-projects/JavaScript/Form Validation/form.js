function isAllCharPresent(str) { 
  let pattern = new RegExp( 
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  ); 

  if (pattern.test(str)) 
    return true; 
  else
    return false; 
}

var username = document.getElementById("username");
var password = document.getElementById("password");
var submit = document.getElementById("submit");


function onUserinput(){
  if(!this.value.trim() == ""){
    username.style.boxShadow = "inset 1px 1px 5px green"
  }else{
    username.style.boxShadow = "inset 1px 1px 5px red"
  }
}

function onPassinput(){
  if(this.value.trim() == ""){
    submit.id = "submit"
    password.style.boxShadow = "inset 1px 1px 5px red"
  }else if(this.value.length < 8 || !isAllCharPresent(this.value)){
    password.style.boxShadow = "inset 1px 1px 5px red"
    submit.id = "submit-btn"
  }else{
    password.style.boxShadow = "inset 1px 1px 5px green"
    submit.id = "submit"
  }
}

function validate(){

  localStorage.setItem("username", username.value)
  localStorage.setItem("password", password.value)

  let msg = ""
  if(username.value.trim() == ""){
    msg = "Invalid Username";
    document.getElementById("error-msg1").innerHTML = msg;
    return false;
  }else if(password.value.trim() == "" || password.value.length < 8 || !isAllCharPresent(password.value)){
    submit.id = "submit-btn"
    document.getElementById("error-msg1").innerHTML = "";
    msg = "Password must be atleast 8 characters and contain at least 1 upper case letter, 1 lower case letter, 1 number and 1 symbol.";
    document.getElementById("error-msg2").innerHTML = msg;
    
    return false;
  }else{
    document.querySelector("form").style.boxShadow = "10px 10px 200px green";
    return setTimeout(()=>{return false},5000)
  }
}

username.addEventListener("input", onUserinput);
password.addEventListener("input", onPassinput);