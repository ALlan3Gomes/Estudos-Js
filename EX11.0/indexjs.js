
let segreto = Math.floor(Math.random() * 10) + 1;

function adivinha(){
    let chute = document.getElementById("chute").value;
    let resultado = document.getElementById("resultado");

    if(chute < segreto){
        resultado.innerHTML = "O numero e maior que !" + chute;
    }else if(chute > segreto){
        resultado.innerHTML = "O numero secreto e menor que "+ chute;       
    }else{
        resultado.innerHTML = "Parabens ! voce acertou o numero "
    }
}