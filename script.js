const dragArea = document.querySelector(".DragAndDrop"),
dragTex = dragArea.querySelector("h3"),
input = dragArea.querySelector("input"),
button = dragArea.querySelector("button");

let myFile;

button.onclick = ()=>{
  input.click()
}
input.addEventListener("change", ()=>{
  myFile = this.files[0];
  dragArea.classList.add("active")
});

input.addEventListener("change" ,function(){
  myFile = this.files[0];
  dragArea.classList.add("active"); 
  ShowMe()
  
})

dragArea.addEventListener("dragover", (event)=> {
event.preventDefault(); 
dragArea.classList.add("active"); 

dragTex.textContent = "Release to Upload File";

} ) 

dragArea.addEventListener("dragleave",  ()=> {
  dragArea.classList.remove("active"); 
  dragTex.textContent = "Drag & Drop";
}); 

dragArea.addEventListener("drop", (event)=>{
  event.defaultPrevented();
  myFile = event.dataTransfer.files[0];
  ShowMe()
})
function ShowMe(){
  let filetype = myFile.type; 
  let VaildEx =  ["image/jpeg", "image/jpg", "image/png"];

  if(VaildEx.includes(filetype)){
      
    let fileReader  = new FileReader(); 

    fileReader.onload = () => {
        let imgUrl = fileReader.result; 
        let img  = `<img src="${imgUrl}" alt="">`

        dragArea.innerHTML = img
    }
    fileReader.readAsDataURL(myFile); 
  }
  else  {
    alert("আপনার ফাইল টা ভালো না পচা । দয়া করে ইমেজ ফাইল ব্যবহার করুন 🥰"); 
    dragArea.classList.remove("active"); 
    dragTex.textContent = "Drag & Drop";
}
}