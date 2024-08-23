let listaDeCalculo = [];

function exibirListaDeCalculo() {
  const texto = document.getElementById("listaDeCalculo");
  texto.innerHTML = "";

  for (let i = 0; i < listaDeCalculo.length; i++) {
    const numero = listaDeCalculo[i];

    texto.innerHTML += `${numero}`;
  }
}

function exibirResultado() {
  const texto = document.getElementById("resultado");
  texto.innerHTML = "";

  for (let i = 0; i < listaDeCalculo.length; i++) {
    const numero = listaDeCalculo[i];

    texto.innerHTML += `${numero}`;
  }
}

const buttons = {
  limpar: document.getElementById("limpar").addEventListener("click", () => {
    listaDeCalculo = [];
    document.getElementById("resultado").innerHTML = "";
    exibirListaDeCalculo();
  }),
  maisOuMenos: document
  .getElementById("maisOuMenos")
  .addEventListener("click", () => {
    if (listaDeCalculo.length > 0) {
      let ultimoElemento = listaDeCalculo.pop();
      ultimoElemento = (-parseFloat(ultimoElemento)).toString();
      listaDeCalculo.push(ultimoElemento);
      
      exibirListaDeCalculo();
    }
  }),
  porcentagem: document
    .getElementById("porcentagem")
    .addEventListener("click", () => {
      listaDeCalculo.push(" / 100 * ");
      exibirListaDeCalculo();
    }),
  divisao: document.getElementById("divisao").addEventListener("click", () => {
    listaDeCalculo.push("/");
    exibirListaDeCalculo();
  }),
  sete: document.getElementById("sete").addEventListener("click", () => {
    listaDeCalculo.push("7");
    exibirListaDeCalculo();
  }),
  oito: document.getElementById("oito").addEventListener("click", () => {
    listaDeCalculo.push("8");
    exibirListaDeCalculo();
  }),
  nove: document.getElementById("nove").addEventListener("click", () => {
    listaDeCalculo.push("9");
    exibirListaDeCalculo();
  }),
  multiplicacao: document
    .getElementById("multiplicacao")
    .addEventListener("click", () => {
      listaDeCalculo.push("*");
      exibirListaDeCalculo();
    }),
  quatro: document.getElementById("quatro").addEventListener("click", () => {
    listaDeCalculo.push("4");
    exibirListaDeCalculo();
  }),
  cinco: document.getElementById("cinco").addEventListener("click", () => {
    listaDeCalculo.push("5");
    exibirListaDeCalculo();
  }),
  seis: document.getElementById("seis").addEventListener("click", () => {
    listaDeCalculo.push("6");
    exibirListaDeCalculo();
  }),
  subtracao: document
    .getElementById("subtracao")
    .addEventListener("click", () => {
      listaDeCalculo.push("-");
      exibirListaDeCalculo();
    }),
  um: document.getElementById("um").addEventListener("click", () => {
    listaDeCalculo.push("1");
    exibirListaDeCalculo();
  }),
  dois: document.getElementById("dois").addEventListener("click", () => {
    listaDeCalculo.push("2");
    exibirListaDeCalculo();
  }),
  tres: document.getElementById("tres").addEventListener("click", () => {
    listaDeCalculo.push("3");
    exibirListaDeCalculo();
  }),
  adicao: document.getElementById("adicao").addEventListener("click", () => {
    listaDeCalculo.push("+");
    exibirListaDeCalculo();
  }),
  virgula: document.getElementById("ponto").addEventListener("click", () => {
    listaDeCalculo.push(".");
    exibirListaDeCalculo();
  }),
  zero: document.getElementById("zero").addEventListener("click", () => {
    listaDeCalculo.push("0");
    exibirListaDeCalculo();
  }),
  deletar: document.getElementById("deletar").addEventListener("click", () => {
    listaDeCalculo.pop();
    exibirListaDeCalculo();
  }),
  resultado: document
    .getElementById("calcular")
    .addEventListener("click", () => {
      try {
        const expressao = listaDeCalculo.join("");
        const resultado = eval(expressao);
        listaDeCalculo = [resultado.toString()];
        exibirResultado(listaDeCalculo);
      } catch (error) {
        console.error("Erro ao calcular a expressão:", error);
        listaDeCalculo = []; // Limpa a lista em caso de erro
      }
    })
};
