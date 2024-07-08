const linguagemFuncional = {
    prototipo: "Funcional"
};

const javascript = {
    nome: "JavaScript",
    ano: 1995,
    __proto__: linguagemFuncional
};

const java = {
    nome: "Java",
    ano: 1995,
    __proto__: linguagemFuncional
};

console.log(javascript);
console.log(javascript.prototipo);
console.log(java);
console.log(java.prototipo);

for (let key in javascript) {
    console.log(key, javascript.hasOwnProperty(key));
}
