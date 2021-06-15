export class Personagem {
  id: number;
  nome: string;
  energia: number;

  constructor(id: number, nome: string, energia: number) {
    this.id = id;
    this.nome = nome;
    this.energia = energia;
  }

  public estaVivo(): boolean {
    if (this.energia > 0) {
      return true;
    }

    return false;
  }

  public defenderAtaque(ataque: number): void {
    if (ataque > this.energia) {
      this.energia = 0;
    }
    
    this.energia -= ataque;
  }

  public toString(): string {
    return `ID: ${this.id}; Nome: ${this.nome}; Energia: ${this.energia.toFixed(2)}; Está vivo? ${this.estaVivo()}`;
  }
}

export class Soldado extends Personagem {
  forcaDeAtaque: number;

  constructor(id: number, nome: string, energia: number, forcaDeAtaque: number) {
    super(id, nome, energia);
    this.forcaDeAtaque = forcaDeAtaque;
  }

  public estaVivo(): boolean {
    if (this.energia > 0) {
      return true;
    }

    return false;
  }

  public defenderAtaque(ataque: number): void {
    if (ataque > this.energia) {
      this.energia = 0;
    }
    
    this.energia -= (ataque / 2);
  }

  public atacar(personagem: Personagem) {
    personagem.defenderAtaque(this.forcaDeAtaque);
  }
}

export class Cavaleiro extends Soldado {

  constructor(id: number, nome: string, energia: number, forcaDeAtaque: number) {
    super(id, nome, energia, forcaDeAtaque);
  }

  public defenderAtaque(ataque: number): void {
    if (ataque > this.energia) {
      this.energia = 0;
    }
    
    this.energia -= (ataque / 3);
  }

  public atacar(personagem: Personagem) {
    personagem.defenderAtaque(this.forcaDeAtaque * 2);
  }
}