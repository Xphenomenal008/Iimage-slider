let index=0;
 let arr=[".jpg", "4d.jpg", "b2.jpg", "j.jpg"]
let display=document.querySelector(".display")
let leftbtn=document.getElementById("leftbtn")
let rightbtn=document.getElementById("rightbtn")
function updateDisplay(){
    display.innerHTML = "";
    let img=document.createElement("img")
img.src=arr[index]
img.classList.add("img1")
display.appendChild(img)
}
leftbtn.addEventListener("click",()=>{
    index--
    if (index < 0) {
        index = arr.length - 1;
    }
     
    updateDisplay()
})
rightbtn.addEventListener("click",()=>{
    index++
    if(index>=arr.length){
        index=0;
    }
   
    updateDisplay()
})
 