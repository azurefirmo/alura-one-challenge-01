async function copiarEColar() {
  let text = document.getElementById("saida").value;
  await navigator.clipboard.writeText(text);
  document.getElementById("saida").value = "";
  document.getElementById("entrada").value = text;
  document.getElementById("aviso").innerHTML = "&nbsp";
}

function criptografar() {
  var textoDigitado = document.getElementById("entrada").value;

  if (textoDigitado != "") {
    var textoCriptografado = textoDigitado
      .split(/e/g)
      .join("enter")
      .split(/i/g)
      .join("imes")
      .split(/a/g)
      .join("ai")
      .split(/o/g)
      .join("ober")
      .split(/u/g)
      .join("ufat");
    document.getElementById("saida").value = textoCriptografado;
    document.getElementById("entrada").value = "";
    document.getElementById("aviso").innerHTML = "&nbsp";
  } else {
    document.getElementById("aviso").innerText =
      "Digite ou cole o texto que será criptografado";
  }
}

function descriptografar() {
  var textoColado = document.getElementById("entrada").value;

  if (textoColado != "") {
    var textoCriptografado = textoColado
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    document.getElementById("saida").value = textoCriptografado;
    document.getElementById("entrada").value = "";
    document.getElementById("aviso").innerHTML = "&nbsp";
  } else {
    document.getElementById("aviso").innerText =
      "Digite ou cole o texto que será descriptografado";
  }
}

function limpar() {
  document.getElementById("saida").value = "";
  document.getElementById("entrada").value = "";
  document.getElementById("aviso").innerHTML = "&nbsp";
}

function share() {
  if (navigator.share !== undefined) {
    navigator.share({ title: "", text: "", url: "" });
  }
}
