const text = "Welcome To ProblemParse";
const x = document.getElementById("type1");
let index = 0;
function typeEffect(){
    if(index < text.length){
        x.textContent += text.charAt(index);
        x.style.fontSize = "40px";
        index++;
        setTimeout(typeEffect,50);
    }else{
        setTimeout(()=>{
            x.textContent = "";
            index = 0;
            typeEffect();
        },1500)
    }
}

typeEffect();
