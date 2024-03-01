let user = localStorage.getItem("username")
let pass = localStorage.getItem("password")



window.addEventListener('load', () => {
  let div = document.getElementById("show")
  div.innerHTML = `Your Username: ${user} || Your Password: ${pass}`;
  div.style.color = "red";
})
