import webpages from "./objects.js";

const div3 = document.getElementById('div3');
const btn = document.getElementById('btn1');
btn.addEventListener("click", addingWebpages)

async function addingWebpages(){
  for (let i = 1; i < Object.keys(webpages).length+1; i++) { 
    await waitforme(1000);

    let div = document.createElement('div');
    let iframe = document.createElement("iframe");
    let para = document.createElement("p");
    let span = document.createElement("span");
    let alink = document.createElement("a");

    iframe.src = webpages[i].link;
    iframe.width = "350px";
    iframe.height = "250px";
    iframe.className = "webpage";

    para.append(webpages[i].p);
    para.className = "heading2";

    span.append(webpages[i].sp);
    span.className = "heading2";

    alink.href = webpages[i].link;
    alink.target = '_blank';
    alink.classList.add("webpageLinks");

    div.classList.add('div4');

    div.appendChild(iframe);
    div.appendChild(para);
    div.appendChild(span);

    div3.appendChild(alink);
    alink.appendChild(div);

    btn.disabled = true;
  }
}

function waitforme(ms){
  return new Promise( resolve => {
    setTimeout(()=>{resolve('')} ,ms)
  })
}