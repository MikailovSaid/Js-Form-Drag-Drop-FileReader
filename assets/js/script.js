// let form = document.getElementById("form");
// let inputPass = document.querySelector(".password");
// let inputEmail = document.querySelector(".email");
// let errorMsgEmail = document.querySelector(".error-msg-email")
// let errorMsgPassword = document.querySelector(".error-msg-password")

// inputEmail.addEventListener("keyup", function(){
//     if (inputEmail.value.trim() == "") {
//         errorMsgEmail.classList.remove("d-none");
//         this.parentNode.lastElementChild.classList.add("disabled");
//     }
//     else{
//         errorMsgEmail.classList.add("d-none");
//         this.parentNode.lastElementChild.classList.remove("disabled");
//     }
// })
// inputPass.addEventListener("keyup", function(){
//     if (inputPass.value.trim() == "") {
//         errorMsgPassword.classList.remove("d-none");
//         this.parentNode.lastElementChild.classList.add("disabled");
//     }
//     else{
//         errorMsgPassword.classList.add("d-none");
//         this.parentNode.lastElementChild.classList.remove("disabled");
//     }
// })

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
    
    
// })



//Drag Drop

// let dragElems = document.querySelectorAll(".item");
// let dropArea = document.getElementById("drop-area");

// // dragElem.ondrag = (e) => {
// //     dragElem.style.backgroundColor ="red";
// // }
// // dragElem.ondragend = (e) => {
// //     dragElem.style.backgroundColor ="black";
// // }

// dragElems.forEach(elem=>{
//     elem.ondragstart = (e) => {
//         e.dataTransfer.setData("id", e.target.id);
//     }
// })

// dropArea.ondragover = (e) => {
//     e.preventDefault();
// }

// dropArea.ondrop = (e) => {
//     let id = e.dataTransfer.getData("id");
//     e.target.append(document.getElementById(id));
// }



// Upload File

