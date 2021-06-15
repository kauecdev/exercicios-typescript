export class Personagem {
    constructor(id, nome, energia) {
        this.id = id;
        this.nome = nome;
        this.energia = energia;
    }
    estaVivo() {
        if (this.energia > 0) {
            return true;
        }
        return false;
    }
    defenderAtaque(ataque) {
        if (ataque > this.energia) {
            this.energia = 0;
        }
        this.energia -= ataque;
    }
    toString() {
        return `ID: ${this.id}; Nome: ${this.nome}; Energia: ${this.energia.toFixed(2)}; Está vivo? ${this.estaVivo()}`;
    }
}
export class Soldado extends Personagem {
    constructor(id, nome, energia, forcaDeAtaque) {
        super(id, nome, energia);
        this.forcaDeAtaque = forcaDeAtaque;
    }
    estaVivo() {
        if (this.energia > 0) {
            return true;
        }
        return false;
    }
    defenderAtaque(ataque) {
        if (ataque > this.energia) {
            this.energia = 0;
        }
        this.energia -= (ataque / 2);
    }
    atacar(personagem) {
        personagem.defenderAtaque(this.forcaDeAtaque);
    }
}
export class Cavaleiro extends Soldado {
    constructor(id, nome, energia, forcaDeAtaque) {
        super(id, nome, energia, forcaDeAtaque);
    }
    defenderAtaque(ataque) {
        if (ataque > this.energia) {
            this.energia = 0;
        }
        this.energia -= (ataque / 3);
    }
    atacar(personagem) {
        personagem.defenderAtaque(this.forcaDeAtaque * 2);
    }
}
//# sourceMappingURL=Personagens.js.map