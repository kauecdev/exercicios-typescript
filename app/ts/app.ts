// function soma(x: number, y?: any): number {
//   return x + y;
// }

// console.log(soma(1, 2));
// console.log(soma(1, "2"));
// console.log(soma(1));

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

  console.log(isDiaUtil(diaZero));
  console.log(isDiaUtil(diaUm));
}




// class MeuNumero {
//   readonly numero: number;

//   constructor(numero: number) {
//     this.numero = numero;
//   }

//   getInteiro(): number {
//     return Math.trunc(this.numero);
//   }

//   getDecimal(): number {
//     return Number((this.numero - Math.floor(this.numero)).toFixed(2));
//   }
// }

// const number = new MeuNumero(24.3);

// console.log(number.getInteiro());
// console.log(number.getDecimal());

// class Transacao {
//   readonly valor: number;
//   readonly desconto: number;

//   constructor(valor: number, desconto: number) {
//     this.valor = valor;
//     this.desconto = desconto;
//   }

//   calcularDesconto(): number {
//     return this.valor * (1 - this.desconto / 100);
//   }

//   getValor(): number {
//     return this.valor;
//   }

//   getDesconto(): number {
//     return this.desconto;
//   }
// }

// const transacao = new Transacao(100, 25);

// console.log(transacao.getValor());
// console.log(transacao.getDesconto());
// console.log(transacao.calcularDesconto());