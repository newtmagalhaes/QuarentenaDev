// Desafio: você consegue exibir o significado do IMC da pessoa?

function imc(peso, altura) {
  return peso / altura ** 2;
}

const IMC = imc(50, 1.7);

console.log(`Seu IMC é ${IMC}`);

if (IMC < 17) {
  console.log("Muito abaixo do peso");
} else if (IMC >= 17 && IMC < 18.5) {
  console.log("Abaixo do peso");
} else if (IMC >= 18.5 && IMC < 25) {
  console.log("Peso normal");
} else if (IMC >= 25 && IMC < 30) {
  console.log("Acima do peso");
} else if (IMC >= 30 && IMC < 35) {
  console.log("Obesidade I");
} else if (IMC >= 35 && IMC < 40) {
  console.log("Obesidade II");
}
