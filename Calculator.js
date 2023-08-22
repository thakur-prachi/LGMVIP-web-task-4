const screen = document.querySelector("#screen");
const btn = document.querySelectorAll(".btn");

for(text of btn) {
    text.addEventListener('click', (event) =>{
        btntext = event.target.innerText;
        if(btntext == "𐤕"){
            btntext = "*";
        }
        if(btntext == "÷"){
            btntext = "/";

        }
        screen.value += btntext;
    });
}
function sin(){
    screen.value= Math.sin(screen.value);
}
function cos(){
    screen.value= Math.cos(screen.value);
}
function tan(){
    screen.value= Math.tan(screen.value);
}
function sqrt(){
    screen.value= Math.sqrt(screen.value, 2);
}
function pow(){
    screen.value= Math.pow(screen.value, 2);
}
function log(){
    screen.value= Math.log(screen.value);
}
function pi(){
    screen.value= 3.14159265359;
}
function e(){
    screen.value = 2.71828182846;
}
function fact(){
    let i, num,f;
    f=1;
    num = screen.value
    for(i = 1; i <=num;i++){
        f = f * 1;
    }
    i = i - 1;
    screen.value = f;
}
function backsapce(){
    screen.value = screen.value.substr(0, screen.value.length -1);
}