function contagemRegressiva() {
  const agora = new Date();
  const datasAlvo = {
    natal: new Date(agora.getFullYear(), 11, 25),
    halloween: new Date(agora.getFullYear(), 9, 31),
    anoNovo: new Date(agora.getFullYear() + 1, 0, 1),
  };

  for (const dataFutura in datasAlvo)
    if (datasAlvo[dataFutura] < agora) {
      datasAlvo[dataFutura] = new Date(
        datasAlvo[dataFutura].getFullYear() + 1,
        datasAlvo[dataFutura].getMonth(),
        datasAlvo[dataFutura].getDate()
      );
    }
  function exibirContagemRegressiva(evento) {
    const dataAlvo = datasAlvo[evento];

    const diferenca = (dataAlvo - agora) / 1000;
    const segundosFaltando = Math.floor(diferenca % 60);
    const minutosFaltando = Math.floor((diferenca / 60) % 60);
    const horasFaltando = Math.floor((diferenca / 3600) % 24);
    const diasFaltando = Math.floor(diferenca / 86400);

    function formatarNumero(numero) {
      return numero < 10 ? `0${numero}` : numero;
    }

    document.getElementById("dia").innerHTML = formatarNumero(diasFaltando);
    document.getElementById("hora").innerHTML = formatarNumero(horasFaltando);
    document.getElementById("minuto").innerHTML =
      formatarNumero(minutosFaltando);
    document.getElementById("segundo").innerHTML =
      formatarNumero(segundosFaltando);
  }

  document.getElementById("mudarData").addEventListener("change", function () {
    const valorSelecionado = this.value;

    if (valorSelecionado === "natal") {
      exibirContagemRegressiva("natal");
    } else if (valorSelecionado === "halloween") {
      exibirContagemRegressiva("halloween");
    } else if (valorSelecionado === "anoNovo") {
      exibirContagemRegressiva("anoNovo");
    }
  });

  document.getElementById("mudarData").dispatchEvent(new Event("change"));
}

setInterval(contagemRegressiva, 1000);
