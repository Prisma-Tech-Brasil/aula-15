let listaDeCalculo = [];

function exibir(id) {
  const texto = document.getElementById(id);
  limpaResultado(id);

  listaDeCalculo.forEach((numero) => {
    texto.innerHTML += `${numero}`;
  });
}

function limpaResultado(id) {
  document.getElementById(id).innerHTML = "";
}

function adicionarEvento(id, acao) {
  document.getElementById(id).addEventListener("click", acao);
}

const calculadora = {
  limpar: () => {
    listaDeCalculo = [];
    exibir("resultado");
    exibir("listaDeCalculo");
  },

  mudaSinal: () => {
    if (listaDeCalculo.length > 0) {
      let ultimoNumero = listaDeCalculo.pop();
      ultimoNumero = (-ultimoNumero).toString();
      listaDeCalculo.push(ultimoNumero);
      exibir("listaDeCalculo");
    }
  },

  porcentagem: () => {
    listaDeCalculo.push(" / 100 *");
    exibir("listaDeCalculo");
  },

  operacao: (operador) => {
    listaDeCalculo.push(operador);
    exibir("listaDeCalculo");
  },

  numero: (num) => {
    listaDeCalculo.push(num);
    exibir("listaDeCalculo");
  },

  deletar: () => {
    listaDeCalculo.pop();
    exibir("listaDeCalculo");
  },

  calcular: () => {
    const expressao = listaDeCalculo.join("");
    const resultado = eval(expressao);
    listaDeCalculo = [resultado];
    exibir("resultado");
  }
};

adicionarEvento("limpar", calculadora.limpar);
adicionarEvento("maisOuMenos", calculadora.mudaSinal);
adicionarEvento("porcentagem", calculadora.porcentagem);
adicionarEvento("divisao", () => calculadora.operacao("/"));
adicionarEvento("multiplicacao", () => calculadora.operacao("*"));
adicionarEvento("subtracao", () => calculadora.operacao("-"));
adicionarEvento("adicao", () => calculadora.operacao("+"));
adicionarEvento("ponto", () => calculadora.numero("."));
adicionarEvento("deletar", calculadora.deletar);
adicionarEvento("calcular", calculadora.calcular);

["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].forEach((id) => {
  adicionarEvento(id, () => calculadora.numero(id));
});
