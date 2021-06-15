class ColecaoArray {
    constructor() {
        this.array = [];
        this.counter = 0;
    }
    proximo() {
        if (this.array[this.counter + 1] !== undefined) {
            return this.array[this.counter++];
        }
        return this.array[this.array.length - 1];
    }
    atual() {
        return this.array[this.counter];
    }
    isPrimeiro() {
        if (this.array[0] === this.array[this.counter]) {
            return true;
        }
        return false;
    }
    isUltimo() {
        if (this.array[this.array.length - 1] === this.array[this.counter]) {
            return true;
        }
        return false;
    }
    irParaPrimeiro() {
        this.counter = 0;
    }
    adiciona(item) {
        this.array.push(item);
    }
}
const iteravel = new ColecaoArray();
iteravel.adiciona(1);
iteravel.adiciona(2);
iteravel.adiciona(3);
iteravel.adiciona(4);
iteravel.adiciona(5);
console.log(iteravel.atual());
console.log(iteravel.isPrimeiro());
console.log(iteravel.proximo());
console.log(iteravel.proximo());
console.log(iteravel.isPrimeiro());
console.log(iteravel.proximo());
console.log(iteravel.proximo());
console.log(iteravel.proximo());
console.log(iteravel.isUltimo());
console.log(iteravel.proximo());
iteravel.irParaPrimeiro();
console.log(iteravel.atual());
console.log(iteravel.isPrimeiro());
//# sourceMappingURL=Iteravel.js.map