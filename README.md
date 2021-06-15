# Exercícios

## Exercícios do dia 04 de junho

Questão 01 -  

  a) Não irá compilar pois, ao dizermos que a variável `a` irá receber o valor `10`, ela associou a tipagem de `a` como sendo um `number`. Ao tentar atribuir o valor `"2"` à variável, ele detectará que o tipo de `"2"` é string, ou seja, diferente do tipo de `a`, o que irá resultar em um erro.  

  b) Neste caso, o código não representa erros e irá compilar normalmente, pois declaramos o tipo da variável `b` como sendo do tipo `any`. O tipo `any`, recebe qualquer tipo de dados, então podemos atribuir qualquer tipo para essa variável.

  c) Por fim, neste caso, atribuímos o tipo `number` para a variável `c`. Como o valor atribuído inicialmente e o atribuído posteriormente, ambos são do mesmo tipo (`number`), não ocorrerá erros na compilação.

Questão 02 - 

  a) 3, uma vez que ambos os valores são do tipo `number`, uma soma de fato é executada.  
  b) 12, já que um dos valores é do tipo `string`, acontece uma concatenação.  
  c) NaN, pois ele tentou somar um `number` com um valor `undefined`.

Questão 03 -

  a) 
  ```ts
  enum Estados {
    PI = "Piauí",
    CE = "Ceará",
    MA = "Maranhão"
  }

  for (let estado in Estados) {
    console.log(estado);
  }

  /*
    Piauí
    Ceará
    Maranhão
  */
  ```

  b)
  ```ts
  enum Estados {
    PI = "Piauí",
    CE = "Ceará",
    MA = "Maranhão"
  }

  Object.keys(Estados).map(indice => console.log(indice));

  /*
    PI
    CE
    MA
  */
  ```

  No transpilação, o `enum` é transformado em um objeto Javascript, então para iterar sobre seus índices podemos utilizar da classe `Object`, juntamente com seu método `keys` que nos retorna um array com as chaves desse objeto. Depois disso, basta usarmos um `forEach` ou um `map` para iterarmos sobre o array gerado. (ps.: também poderíamos armazenar esse array em uma variável qualquer e iterarmos com um `for`, porém seria mais verboso)


Questão 04 - 

```ts
enum DiasSemana {
  SEGUNDA = "Segunda",
  TERCA = "Terça",
  QUARTA = "Quarta",
  QUINTA = "Quinta",
  SEXTA = "Sexta",
  SABADO = "Sábado",
  DOMINGO = "Domingo"
}

namespace DiasSemana {
  function isDiaUtil(dia: DiasSemana): boolean {
    if (dia === DiasSemana.SABADO || dia === DiasSemana.DOMINGO) {
      return false;
    }

    return true;
  }

  const diaZero: DiasSemana = DiasSemana.DOMINGO;
  const diaUm: DiasSemana = DiasSemana.SEGUNDA;

  console.log(isDiaUtil(diaZero)); // false
  console.log(isDiaUtil(diaUm)); // true
}
```

Questão 05 -

```ts
function exibir(...rest: string[]) {
  console.log(...rest);
}

exibir("a", "b"); // a b
exibir("a", "b", "c"); // a b c
exibir("a", "b", "c", "d"); // a b c d
```

Questão 06 - 
```ts
const ola = () => console.log("Olá"); // Olá
```

Questão 07 - 
```ts
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const pares = array.filter(numero => numero % 2 === 0);

// [2, 4, 6, 8, 10, 12, 14]
```

Questão 08 -

```ts
class MeuNumero {
  readonly numero: number;

  constructor(numero: number) {
    this.numero = numero;
  }

  getInteiro(): number {
    return Math.trunc(this.numero);
  }

  getDecimal(): number {
    return Number((this.numero - Math.floor(this.numero)).toFixed(2);
  }
}

const number = new MeuNumero(24.3);

console.log(number.getInteiro()); // 24
console.log(number.getDecimal()); // 0.3
```

Questão 09 - 

```ts
class Transacao {
  readonly valor: number;
  readonly desconto: number;

  constructor(valor: number, desconto: number) {
    this.valor = valor;
    this.desconto = desconto;
  }

  calcularDesconto(): number {
    return this.valor * (1 - this.desconto / 100);
  }

  getValor(): number {
    return this.valor;
  }

  getDesconto(): number {
    return this.desconto;
  }
}

const transacao = new Transacao(100, 25);

console.log(transacao.getValor()); // 100
console.log(transacao.getDesconto()); // 25
console.log(transacao.calcularDesconto()); // 75
```

## Exercícios do dia 10 de junho

Questão 01 -  
Resposta: 