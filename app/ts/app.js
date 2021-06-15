import Jogo from "./jogo/Jogo.js";
import { Cavaleiro, Personagem, Soldado } from "./jogo/personagens/Personagens.js";
function main() {
    const personagem = new Personagem(1, 'Citizen', 100);
    const soldado1 = new Soldado(2, 'Soldier', 100, 8);
    const soldado2 = new Soldado(3, 'Archer', 100, 7);
    const cavaleiro = new Cavaleiro(4, 'Knight', 100, 10);
    const jogo = new Jogo();
    jogo.incluir(personagem);
    jogo.incluir(soldado1);
    jogo.incluir(soldado2);
    jogo.incluir(cavaleiro);
    jogo.atacar(2, 1);
    jogo.avaliarBatalha();
    jogo.atacar(4, 2);
    jogo.avaliarBatalha();
    jogo.atacar(3, 4);
    jogo.avaliarBatalha();
    jogo.atacar(4, 3);
    jogo.avaliarBatalha();
}
main();
//# sourceMappingURL=app.js.map