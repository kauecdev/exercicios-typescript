import { Cavaleiro, Soldado } from "./personagens/Personagens.js";
export default class Jogo {
    constructor() {
        this.personagens = [];
    }
    incluir(p) {
        let personagemIgual = this.personagens.filter(personagem => personagem.id === p.id);
        if (personagemIgual.length > 0) {
            console.log('ID já existe.');
            return;
        }
        this.personagens.push(p);
    }
    consultar(id) {
        let personagem = this.personagens.filter(personagem => personagem.id === id);
        if (personagem.length > 0) {
            return personagem[0];
        }
        return null;
    }
    atacar(idAtacante, idAtacado) {
        if (idAtacante === idAtacado) {
            console.log('Um personagem não pode se auto atacar');
            return;
        }
        let atacante = this.consultar(idAtacante);
        let atacado = this.consultar(idAtacado);
        if (atacante && atacado) {
            if (atacante instanceof Soldado || atacante instanceof Cavaleiro) {
                atacante.atacar(atacado);
                return;
            }
            console.log('Erro, o atante deve ser uma instância de Soldado ou Cavaleiro.');
        }
    }
    avaliarBatalha() {
        this.personagens.forEach(personagem => console.log(personagem.toString()));
    }
}
//# sourceMappingURL=Jogo.js.map