// Declare your arrays here
let submitButton = document.querySelector("button");
submitButton.addEventListener("click",function(){

    let results=document.querySelector("div")
let Chocolate = ["hersh.png", "choc.png"]
let  Hard = ["jolly.png","toot.jpg"]
let  Sour = ["war.jpg", "kids.jpg"];
let candyInput = document.querySelector("input").value;


if("Chocolate" === candyInput)
    for (let e of Chocolate)
{let img = document.createElement("img")
img.src = e 
results.appendChild(img)
}
if("Hard" === candyInput)
    for (let e of Hard)
{let img = document.createElement("img")
img.src = e 
results.appendChild(img)
}
if("Sour" === candyInput)
    for (let e of Sour)
{let img = document.createElement("img")
img.src = e 
results.appendChild(img)
}

}); 
   



