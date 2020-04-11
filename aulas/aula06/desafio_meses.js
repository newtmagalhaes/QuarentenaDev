// Desafio: você consegue dizer para o usuário qual é o mês baseado no número de 1 a 12 que ele escolher?

function mes(numeroDoMes = 1) {
  const meses = [
    "Dezembro",
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
  ];
  numeroDoMes = numeroDoMes % 12;
  return meses[numeroDoMes];
}

console.log(`O mês é ${mes(4)}`)
