// 1. Criar uma função que exibe "Olá, mundo!" no console.
function helloWorld() {
    console.log("Hello, World!");
}
helloWorld();
// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function greet() {
    let name = prompt("Digite seu nome:");
    console.log(`Olá, ${name}!`);
}
greet();

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
    return numero * 2;
}
    let resultadoDobro = calcularDobro(8);
  console.log(resultadoDobro);

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let media = calcularMedia(8, 20, 50);
  console.log(media);

//5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = encontrarMaior(26, 32);
  console.log(maiorNumero);

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(8);
console.log(resultado); 