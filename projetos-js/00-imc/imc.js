const calcular = document.getElementById("calcular");

calcular.addEventListener("click", imc);

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado").value;

  /* Fazendo comparação lógica */
  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classsificacao = "";

    if (valorIMC < 18.5) {
        classsificacao = "Abaixo do peso";
    } else if (valorIMC < 25) {
      classsificacao = "Peso ideal";
    } else if (valorIMC < 30) {
      classsificacao = "Acima do peso";
    } else if (valorIMC < 35) {
      classsificacao = "Obesidade grau° 1";
    } else if (valorIMC < 40) {
      classsificacao = "Obesidade grau° 2";
    } 
    else {
      classsificacao = "Obesidade grau° 3, tá roliço seu gordo!";
    }
    resultado.textContent = `${nome} seu IMC é ${classsificacao}`;

  }else{
        resultado.textContent = "Preencha todos os campos!";
    }
}

