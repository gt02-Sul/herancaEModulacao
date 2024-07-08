import { Cachorro } from './cachorro.js';

document.addEventListener("DOMContentLoaded", () => {
    const cachorro = new Cachorro('Rex');
    const citeElement = document.querySelector('.atividade');
    cachorro.emitirSom(citeElement);
});
