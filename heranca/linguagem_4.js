const linguagemFuncional = {
    prototipo: "Funcional"
};

const javascript = {
    nome: "JavaScript",
    ano: 1995,
};
Object.setPrototypeOf(javascript, linguagemFuncional);

const java = {
    nome: "Java",
    ano: 1995,
};
Object.setPrototypeOf(java, linguagemFuncional);

for (let key in javascript) {
    console.log(key, javascript.hasOwnProperty(key));
}
