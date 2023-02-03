var numeroSecreto = parseInt(Math.random()*1000 + 1); //número secreto aleatório de 1 a 1000
var contador = 0;
var tentativas = 0;

function chutar() {
    var res = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    contador = contador + 1;

        if (chute == numeroSecreto) {
            res.innerHTML = "PARABÉNS!! Você acertou na" + contador + "ª tentativa. Meu número secreto é " + chute + ".";
            
    
          } else if (chute > numeroSecreto) {
              tentativas = tentativas + 1;
              res.innerHTML = "Errou!. Meu número secreto é Menor. Você fez a " + contador + "ª tentativa.";

          } else if (tentativas >= 10) {
            res.innerHTML = "Game Over. As tentativas acabaram. O número secreto era " + numeroSecreto + ".";
          
         } else {
            tentativas = tentativas + 1;  
            res.innerHTML = "Errou!. Meu número secreto é Maior! Você fez a " + contador + "ª tentativa."
          }
}    