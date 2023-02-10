var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputlength(){
    return input.value.length;
}

function createElement(){
    var li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value ="";
}


function addListAfterClick(){
    if(input.value.length >0) {
        createElement();
    }      
}

function addListAfterkeypress(event) {
    if(input.value.length > 0 && event.keycode === 13) {
        createElement();
     }
    
}
 button.addEventListener("click" , addListAfterClick);

 input.addEventListener("keypress" , addListAfterkeypress);