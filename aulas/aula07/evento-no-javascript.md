# Aula 07: Sorteio com Botões e Funções

> [:link: Site](https://www.alura.com.br/quarentenadev/aula07-evento-no-javascript "Site da aula 07")

Seja bem-vindo e bem-vinda à sétima aula da **#QuarentenaDev**!
Você, é você mesmo que queria descobrir como exibir o HTML primeiro e depois gerar a interação do usuário com JavaScript, essa aula é para você.
E para você que não queria saber, afinal a aula é para todos e todas!

## Aula

> [:link: Videoaula](https://www.youtube.com/watch?v=Iy8fJU6xcus "Vídeo não listado no YouTube")

## Desafio do Paulo

O Paulo desafiou vocês a trocar o estilo da mensagem de "você ganhou" ou "você perdeu"

> [:dart: Resolução](https://codepen.io/newtmagalhaes/pen/WNQbqGz "Código no Codepen")

### Dica para o exercício do Paulo

Para alterar o HTML utilizando JavaScript primeiro selecionamos a tag que diz respeito ao parágrafo a `paragrafoResultado` e depois usamos a propriedade `innerHTML` que vai ser reponsável por colocar o texto!

```JavaScript
paragrafoResultado.innerHTML= 'Voce ganhou o sorteio'
```

Para alterar o CSS o principio é igual, porém no lugar de `innerHTML` que mexe com HTML, passamos a propriedade `style` do css e depois a propriedade que queremos alterar.

Nesse exemplo escolhemos a propriedade `backgroundColor` que altera a cor de fundo e passamos a cor amarela.
Assim quando o evento for ativado e acertarmos o número a cor de fundo fica amarela.

```JavaScript
paragrafoResultado.style.backgroundColor = "yellow"
```

## Desafio do Art

O Art desafiou você a não deixar o usuário digitar um número maior que 10, caso ele digite um maior, dizer que ele não pode e pedir para digitar um novo número.

> [:dart: Resolução](https://codepen.io/newtmagalhaes/pen/ZEbYdpw "Código no Codepen")

### Dica para o exercício do Art

Dica de como dizer ao usuário que os números precisam ficar entre 0 e 10

no código da aula fazemos a comparação logo no começo:

```JavaScript
numerocerto=chute==aleatorio
```

O que vamos fazer é colocar essa comparação depois de ter certeza que o número está entre 1 e 10.

E para fazer essa comparação vamos usar o `if`, operador lógico **ou** que em JavaScript é `||` e simbolos que indicam: `>` maior que e `<` menor que.

```JavaScript
if( chute < 0 || chute > 10 ){ pedir um novo número}
```

Estamos dizendo que caso chute for menor que zero ou maior que 10 vamos pedir um numero novo só depois dessa verificação fazemos a comparação do número digitado com o gerado pelo aleatorio.

```JavaScript
let chute = prompt('Seu numero da sorte(1-10)')

if(chute < 0 || chute > 10){ pedir um numero novo}

numerocerto = (chute == aleatorio)
```

## Participantes

- [Paulo Silveira](https://twitter.com/paulo_caelum "Perfil no Twitter")

- [Mario Souto](https://twitter.com/omariosouto "Perfil no Twitter")

- [Vanessa Tonini](https://twitter.com/vanessametonini "Perfil no Twitter")

- [Artur Diniz](https://twitter.com/artdiniz "Perfil no Twitter")

- [Amanda Almeida](https://www.instagram.com/theamandaalmeida "Perfil no Twitter")
