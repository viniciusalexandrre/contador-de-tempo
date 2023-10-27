function trocarEstiloEmoji() {
  const titulo = document.querySelector(".titulo");
  const emoji = document.querySelectorAll(".feriado span");
  const mudarData = document.getElementById("mudarData");

  function removerEmoji(elementos, ...classe) {
    elementos.classList.remove(...classe);
  }

  mudarData.addEventListener("change", function () {
    const estiloDeEmoji = this.value;

    console.log("titulo", titulo);
    console.log("titulo", estiloDeEmoji);
    console.log("emoji", emoji);

    switch (estiloDeEmoji) {
      case "natal":
        emoji[0].innerHTML = "🎄";
        emoji[1].innerHTML = "🎅🏻";
        titulo.innerHTML = "Natal";
        titulo.classList.add("tituloNatal");
        removerEmoji(titulo, "tituloHalloween", "tituloAnoNovo");
        break;
      case "halloween":
        emoji[0].innerHTML = "💀";
        emoji[1].innerHTML = "🎃";
        titulo.innerHTML = "Halloween";
        titulo.classList.add("tituloHalloween");
        removerEmoji(titulo, "tituloNatal", "tituloAnoNovo");
        break;
      case "anoNovo":
        emoji[0].innerHTML = "🎉";
        emoji[1].innerHTML = "🥂";
        titulo.innerHTML = "Ano novo";
        titulo.classList.add("tituloAnoNovo");
        removerEmoji(titulo, "tituloNatal", "tituloHalloween");
        break;
    }
  });
}

trocarEstiloEmoji();
