const text = document.getElementById("text");
const speed = document.getElementById("speed");
const texto = "Yo amo programar";
let idx = 1;
let speed2 = 300 / speed.value;

writeText();

function writeText(){
    text.innerText = texto.slice(0, idx);

    idx++;

    if(idx > texto.length){
        idx = 1
    }

    setTimeout(writeText, speed2);
}

speed.addEventListener("input", e => {
    speed2 = 300/ e.target.value; 
});