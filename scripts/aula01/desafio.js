// Desafio: dada a sua idade, quantas vezes seu coração já bateu?

/**
 * Aula 01 - https://github.com/newtmagalhaes/QuaentenaDev/tree/master/aulas/aula01.md
 *  O calculo das batidas:
 *      - O nosso coração bate uma média de 75 vezes por minuto aproximadamente;
 *      - Sabemos que 1 hora tem 60 minutos;
 *      - Sabemos quantas horas tem o dia (24);
 *      - Sabemos quantos dias o ano tem (365, desconsiderando anos bissextos);
 * 
 * 365 * 24 * 60 * 75 = 39420000
*/

/** Retorna a estimativa de quantas vezes seu coração já bateu em função da sua idade */
function batimentos(idade) { return idade * 365 * 24 * 60 * 75 }

const idade = 42

console.log(batimentos(idade), "batimentos")
