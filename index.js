const body=document.getElementsByTagName("body")[0];    

function setColor(name){
   body.style.backgroundColor = name
}

function randomColor(){
    var color = Math.floor(Math.random()*16777215).toString(16);
    setColor("#"+color);
}



