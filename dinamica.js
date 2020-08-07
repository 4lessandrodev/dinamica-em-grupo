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


let multiplicador = 7
let numeros = [
    0,1,2,3,4,5,6,7,8,9,10
]
console.log(`${multiplicador} * ${numeros[0]} = ${multiplicador*numeros[0]}`)
console.log(`${multiplicador} * ${numeros[1]} = ${multiplicador*numeros[1]}`)
console.log(`${multiplicador} * ${numeros[2]} = ${multiplicador*numeros[2]}`)
console.log(`${multiplicador} * ${numeros[3]} = ${multiplicador*numeros[3]}`)
console.log(`${multiplicador} * ${numeros[4]} = ${multiplicador*numeros[4]}`)
console.log(`${multiplicador} * ${numeros[5]} = ${multiplicador*numeros[5]}`)
console.log(`${multiplicador} * ${numeros[6]} = ${multiplicador*numeros[6]}`)
console.log(`${multiplicador} * ${numeros[7]} = ${multiplicador*numeros[7]}`)
console.log(`${multiplicador} * ${numeros[8]} = ${multiplicador*numeros[8]}`)
console.log(`${multiplicador} * ${numeros[9]} = ${multiplicador*numeros[9]}`)
console.log(`${multiplicador} * ${numeros[10]} = ${multiplicador*numeros[10]}`)

