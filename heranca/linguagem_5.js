const linguagemFuncional = Object.create({});
linguagemFuncional.prototipo = "Funcional";

// const linguagemFuncional = {
//     prototipo: "Funcional"
// };

const javascript = Object.create(linguagemFuncional);
    javascript.nome = "JavaScript";
    javascript.ano = 1995;

const java = Object.create(linguagemFuncional);
    javascript.nome = "Java";
    javascript.ano = 1995;


console.log(javascript);
console.log(javascript.__proto__);

console.log(java.__proto__.prototipo);
console.log(Object.getPrototypeOf(java));

console.log(Object(javascript, java));