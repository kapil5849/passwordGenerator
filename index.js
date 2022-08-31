const passwordChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ",", ".", "~", "!",";", ":", "?", "/", "&", "^", "#", "=", "$", "+", "*", "%", "'", "|", "'", "<", ">", "@"]
let boxEl1 = document.getElementById("box_1");
let boxEl2 = document.getElementById("box_2");
let boxEl3 = document.getElementById("box_3");
let boxEl4 = document.getElementById("box_4");
document.getElementById("button_el").addEventListener("click", generate)
function generate(){
        boxEl1.textContent = "";
        boxEl2.textContent = "";
        boxEl3.textContent = "";
        boxEl4.textContent = "";
    for(i = 0; i < 17; i ++){
        boxEl1.textContent += passwordChars[randomCharGenerator()];
        boxEl1.style.color = "#55F991";
        boxEl2.textContent += passwordChars[randomCharGenerator()];
        boxEl2.style.color = "#55F991";
        boxEl3.textContent += passwordChars[randomCharGenerator()];
        boxEl3.style.color = "#55F991";
        boxEl4.textContent += passwordChars[randomCharGenerator()];
        boxEl4.style.color = "#55F991";
    }
}
function randomCharGenerator(){
    return Math.floor(Math.random() * passwordChars.length);
}
