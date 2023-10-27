function trocarEstiloDaBorda() {
  const contagem = document.querySelectorAll(".contagem");
  const mudarData = document.getElementById("mudarData");

  function removerEstilo(elementos, ...classe) {
    elementos.forEach((elemento) => elemento.classList.remove(...classe));
  }

  mudarData.addEventListener("change", function () {
    const estiloData = this.value;

    console.log("estiloData", estiloData);

    switch (estiloData) {
      case "natal":
        removerEstilo(contagem, "blocoAnoNovo", "blocoHalloween");
        contagem.forEach((elemento) => elemento.classList.add("blocoNatal"));
        break;
      case "halloween":
        removerEstilo(contagem, "blocoNatal", "blocoAnoNovo");
        contagem.forEach((elemento) =>
          elemento.classList.add("blocoHalloween")
        );
        break;
      case "anoNovo":
        removerEstilo(contagem, "blocoHalloween", "blocoNatal");
        contagem.forEach((elemento) => elemento.classList.add("blocoAnoNovo"));
        break;
    }
  });
}

trocarEstiloDaBorda();
