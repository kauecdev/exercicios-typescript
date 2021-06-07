// function soma(x: number, y?: any): number {
//   return x + y;
// }
// console.log(soma(1, 2));
// console.log(soma(1, "2"));
// console.log(soma(1));
var DiasSemana;
(function (DiasSemana) {
    DiasSemana["SEGUNDA"] = "Segunda";
    DiasSemana["TERCA"] = "Ter\u00E7a";
    DiasSemana["QUARTA"] = "Quarta";
    DiasSemana["QUINTA"] = "Quinta";
    DiasSemana["SEXTA"] = "Sexta";
    DiasSemana["SABADO"] = "S\u00E1bado";
    DiasSemana["DOMINGO"] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
(function (DiasSemana) {
    function isDiaUtil(dia) {
        if (dia === DiasSemana.SABADO || dia === DiasSemana.DOMINGO) {
            return false;
        }
        return true;
    }
    const diaZero = DiasSemana.DOMINGO;
    const diaUm = DiasSemana.SEGUNDA;
    console.log(isDiaUtil(diaZero));
    console.log(isDiaUtil(diaUm));
})(DiasSemana || (DiasSemana = {}));
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
//# sourceMappingURL=app.js.map