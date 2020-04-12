// Desafio: Quantas olimpiadas tivemos até hoje?

// Considerando que a primeira olimpiada ocorreu em 1896 e ocorre novamente a cada 4 anos

const anoPrimeiraOlimpiada = 1896,
  anoAtual = 2020,
  numeroDeOlimpiadas = Math.floor((anoAtual - anoPrimeiraOlimpiada) / 4);

console.log("Até hoje, houveram", numeroDeOlimpiadas, "olimpíadas");
