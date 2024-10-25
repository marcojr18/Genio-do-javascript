const lampada = document.getElementById("lampada");
//estamos guardando na variavel lampada em uma tag
// document acessa a tag ID
console.log(lampada);

const button = document.getElementById("btn");
console.log(button)

let lampOn = false;
// false ou true é um valor booleano

button.addEventListener("click", ()=>{
    lampOn = !lampOn;
    lampada.src = lampOn
 ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
 : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
}) 

