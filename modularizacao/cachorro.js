import { Animal } from './animal.js';

export class Cachorro extends Animal {
    emitirSom(element) {
        element.textContent = `${this.nome} está latindo.`;
    }
}
