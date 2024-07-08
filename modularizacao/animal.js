export class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom(element) {
        element.textContent = `${this.nome} está emitindo um som.`;
    }
}
