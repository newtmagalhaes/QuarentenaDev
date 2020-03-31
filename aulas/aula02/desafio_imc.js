// Desafio: Será que você consegue descobrir qual o seu IMC?

/** Retorna o IMC, dados @param peso e @param altura */
function imc(peso, altura) { return peso / (altura ** 2) }

const peso = 50,
    altura = 1.70

console.log("meu imc é:", imc(peso, altura))