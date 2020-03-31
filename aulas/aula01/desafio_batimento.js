// Desafio: dada a sua idade, quantas vezes seu coração já bateu?

/** Retorna a estimativa de quantas vezes seu coração já bateu em função da sua idade */
function batimentos(idade) { return idade * 365 * 24 * 60 * 75 }

const idade = 42

console.log(batimentos(idade), "batimentos")
