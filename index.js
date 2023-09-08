document
  .getElementById("formCalculo")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos de entrada
    var quantidadeBancas = parseInt(
      document.getElementById("quantidade-bancas").value
    );
    var quantidadeMetros = parseInt(
      document.getElementById("quantidade-metros").value
    );

    // Realiza o cálculo
    var resultado = quantidadeBancas * quantidadeMetros;

    // Exibe o resultado
    alert("O resultado do cálculo é: " + resultado);
  });
