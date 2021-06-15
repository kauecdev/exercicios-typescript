interface Iteravel<T> {
  proximo(): T;
  atual(): T;
  isPrimeiro(): boolean;
  isUltimo(): boolean;
  irParaPrimeiro(): void;
}

class ColecaoArray<T> implements Iteravel<T> {
  private array: T[] = [];
  private counter: number = 0;

  public proximo(): T {
    if (this.array[this.counter + 1] !== undefined) {
      return this.array[this.counter++];
    }

    return this.array[this.array.length - 1];
  }

  public atual(): T {
    return this.array[this.counter];
  }

  public isPrimeiro(): boolean {
    if (this.array[0] === this.array[this.counter]) {
      return true;
    }

    return false;
  }

  public isUltimo(): boolean {
    if (this.array[this.array.length - 1] === this.array[this.counter]) {
      return true;
    }

    return false;
  }

  public irParaPrimeiro() {
    this.counter = 0;
  }

  public adiciona(item: T) {
    this.array.push(item);
  }
}

const iteravel = new ColecaoArray<number>();

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