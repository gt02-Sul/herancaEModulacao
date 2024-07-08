
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        console.log(`
        \
        Olá, 
        meu nome é ${this.nome} 
        e eu tenho ${this.idade} anos.
        \
        `);
    }
}

const pessoa1 = new Pessoa('João', 25);
pessoa1.saudacao();

