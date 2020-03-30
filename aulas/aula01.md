# Aula 1: Seu primeiro código JavaScript

> [:link: Site](https://www.alura.com.br/quarentenadev/aula01-javascript)

Seja bem vindo à primeira aula da **#QuarentenaDev**!

Eu e toda equipe bolamos essa primeira aula para você não precisar instalar nada.
**Seu primeiro código será em _JavaScript_**, sem sair do seu navegador (o tal do **_browser_**)!

Lembre-se de compartilhar seus experimentos e ir praticando para o conhecimento!

## Aula

> [:link: Videoaula](https://www.youtube.com/watch?v=wtbgwcMrkQg)

Na aula de hoje conhecemos o `alert()` ele mostra uma caixa de diálogo de aviso com o que escrevemos e um botão OK.
Então para mostrar um cálculo de **multiplicação** nessa caixa podemos escrever o seguinte código no nosso navegador:

```JavaScript
alert(4 * 4);
```

E vamos ver o popup mostrando o número 16.

Podemos fazer outras operações como **soma** ou **subtração**:

```JavaScript
alert(3 + 3);
alert(4 - 3);
```

Para fazer a calculo com várias operações juntas precisamos utilizar parênteses para separar cada uma delas.

```JavaScript
alert((((3 * 3 ) * 3) * 3));
```

A resposta aqui é 81.

Também podemos colocar mensagens junto com o resultado da operação que estamos fazendo, para isso precisamos usar as áspas `" "` para o navegador entender que estamos passando um texo: `"Ola meu nome é Paulo e eu tenho"`, e para juntar o texto e a operação para descobrir a idade o sinal de adição `+`.

```JavaScript
alert("Ola meu nome é Paulo e eu tenho" + 10 * 2 + "anos");
```

A mensagem exibida aqui é `Olá meu nome é Paulo e eu tenho 20 anos`.

Agora que já sabemos fazer operações vamos ao desafio.

## Desafio

> [:dart: Resolução](../scripts/aula01/desafio.js)

Para essa aula, deixamos como desafio você tentar fazer o **cálculo de batimentos cárdiacos** e mandar isso no canal!
Isto é: dada a sua _idade_, quantas vezes seu coração já bateu?
Sim, é uma estimativa. :smiley:

### Calculo das batidas

O nosso coração bate uma média de 75 vezes por minuto aproximadamente.
Sabemos que 1 hora tem 60 minutos.
Com essa informação conseguimos descobrir quantas batidas por hora o coração dá.

Agora que sabemos as batidas por hora, conseguimos saber quantas batidas ele dá por dia já que sabemos quantas horas tem o dia.

Com a informação da quantidade de batida que o coração da por dia, conseguimos calcular quantas batidas o coração dá por ano já que sabemos quantos dias o ano tem.
Agora é só calcular quanto o coração já bateu durante toda nossa vida.

Em breve aprenderemos como usar ferramentas, como o codepen, para poder trocar código entre nós.

## Participantes

- [Paulo Silveira](https://twitter.com/paulo_caelum)

- [Mario Souto](https://twitter.com/omariosouto)

- [Vanessa Tonini](https://twitter.com/vanessametonini)

- [Artur Diniz](https://twitter.com/artdiniz)

- [Amanda Almeida](https://www.instagram.com/theamandaalmeida)
