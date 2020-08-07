let comunidade = "idev";
console.log(comunidade);
let texto = "comunidade - Dinâmica em grupo";
console.log(texto);
texto = texto[0].toUpperCase() + texto.slice(1, texto.length);
console.log(texto);
let texto1 = texto.toLowerCase()
console.log(texto1)
let data = new Date()
console.log(data)
let dia = data.getDay()
let mes = data.getMonth()
console.log(`${dia} / ${mes}`)
let caracteres = texto.length;
console.log(caracteres);
let salarioMinimo = 1045.00;
console.log(salarioMinimo);

let membros = [
    "Alessandro","Airton","Cosme","Daniele","Thassia","Vinícius"
];
console.table(membros);

let quantidadedemembros = membros.length;
console.log(quantidadedemembros);


let membrosCor = [ {
  nome: "Alessandro",
  cor: "rosa"
},{
  nome: "Airton",
  cor: "azul"
}, {
  nome:"Cosme",
  cor: "preto"
}, {
  nome: "Daniele",
  cor: "roxo"
}, {
  nome: "Thassia",
  cor: "vermelho"
}, {
  nome: "Vinícius",
  cor: "amarelo"
}, {
  nome: "Rafael",
  cor: "verde"
}];

console.table(membrosCor);


