import imgs from './object.js';

const myContent = document.getElementById("my")
// const myContent = document.querySelector(".myContent")

// const showInHtml = imgs.map((project) =>{
//   return `
//   <div>
//     <img src="${project}">
//   </div>`
// })


  for(let i=0; i < imgs.length; i=i+1){
    let img = document.createElement('img');
    img.src = imgs[i].img;
    myContent.append(img);
  }


//myContent.innerHTML = showInHtml;