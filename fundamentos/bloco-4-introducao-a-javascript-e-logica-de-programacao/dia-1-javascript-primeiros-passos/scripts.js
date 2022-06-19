// // Conteúdos = "Operadores lógicos"

// const currentHour = 21;
// var message = '';

// if(currentHour >= 22){
//   message = 'Não deveriamos comer nada, é hora de dormir';
// } else if (currentHour >= 18 && currentHour < 22){
//   message = 'Rango da noite, vamos jantar :D';
// } else if (currentHour >= 14 && currentHour < 18){
//   message = 'Vamos fazer um bolo pro café da tarde?';
// } else if (currentHour >= 11 && currentHour < 14){
//   message = 'Hora do almoço!!!';
// } else {
//   message = 'Hmmm, cheiro de café recém passado';
// }

// console.log(message);

// //Exercícios = "Agora a prática"

// //1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// // Adição (a + b)

// const a = 10;
// const b = 10;

// console.log(a + b);


// // Subtração (a - b)

// const a = 10;
// const b = 10;

// console.log(a - b);

// // Multiplicação (a * b)

// const a = 10;
// const b = 10;

// console.log(a * b);

// / Divisão (a / b)

// const a = 10;
// const b = 10;

// console.log(a / b);

// // Módulo (a % b)

// const a = 10;
// const b = 10;

// console.log(a % b);

// //2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// const a = 12;
// const b = 12;

// if(a > b){
//   console.log('A constante a é maior: ' + a);
// } else if (a < b){
//   console.log('A constante b é maior: ' + b);
// } else {
//   console.log('Os dois números possuem o mesmo valor');

// //3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const a = 14;
// const b = 13;
// const c = 12;

// if(a > b && a > c){
//   console.log('A constante a é maior: ' + a);
// } else if (b > a && b > c){
//   console.log('A constante b é maior: ' + b);
// } else {
//   console.log('A constante c é maior: ' + c);
// }

// //4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const a = 0;

// if(a > 1){
//   console.log('Positive: ' + a);
// } else if (a < -1){
//   console.log('Negative: ' + a);
// } else {
//   console.log('Zero: ' + a);
// }

// //5 -  Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// const a = 60;
// const b = 60;
// const c = 61;

// if(a + b + c === 180){
//   console.log('True');
// } else if (a <= -1 || b <= -1 || c <= -1){
//   console.log('Favor digitar um angulo válido');
// } else {
//   console.log('False');
// }

// //6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// const xadrex = 'BiShOp'

// switch (xadrex.toLowerCase()) {
//   case 'teste':
//     console.log('Faz esses movimentos');
//     break;

//   case 'bishop':
//     console.log('Faz os movimentos do bispo diagonais');
//     break;

//   default:
//     console.log('Erro! Digite uma peça válida');
// }

// //7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// let nota = 70;

// if(nota >= 90){
//   console.log('A');
// } else if (nota >= 80){
//   console.log('B');
// } else if (nota >= 70){
//   console.log('C');
// } else if (nota >= 60){
//   console.log('D');
// } else if (nota >= 50){
//   console.log('E');
// } else if (nota < 50){
//   console.log('F');
// } else if (nota < 0 || nota > 100){
//   console.log('Nota invalida');
// }

// //8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

// const a = 11;
// const b = 13;
// const c = 15;

// if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
//   console.log('true');
// } else {
//   console.log('false');
// }

// //9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

// const a = 10;
// const b = 12;
// const c = 14;

// if(a % 2 === 1 || b % 2 === 1 || c % 2 === 1){
//   console.log('true');
// } else {
//   console.log('false');
// }

// //10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// const custoProduto = 5;
// const valorVenda = 10;
// const quantidade = 1000;

// if(custoProduto < 0 || valorVenda < 0 || quantidade < 0){
//   console.log('Valores menores que zero');
// } else {
//   var lucro = quantidade * (valorVenda - custoProduto * 1.20);
// }

// console.log(lucro);

// //11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salario = 3000;
let salarioMenosInss = 0;
let salarioMenosIr = 0;
let salarioFinal = 0;

if (salario <= 1556.94){
  salarioMenosInss = salario -  ((salario * 8) / 100);

} else if (salario <= 2594.92) {
  salarioMenosInss = salario -  ((salario * 9) /100);
    
} else if (salario <= 5189.82) {
  salarioMenosInss = salario -  ((salario * 11) / 100);

} else salarioMenosInss = salario -  570.88;

if (salarioMenosInss >= 1903.99 && salarioMenosInss <= 2826.65) {
  salarioFinal = salarioMenosInss - Math.abs((142.80 - ((salarioMenosInss * 7.5) / 100)));
} else if (salarioMenosInss <= 3751.05) {
  salarioFinal = salarioMenosInss - Math.abs((354.80 - ((salarioMenosInss * 15) / 100)));
} else if (salarioMenosInss <= 4664.68) {
  salarioFinal = salarioMenosInss - Math.abs((636.13 - ((salarioMenosInss * 22.5) / 100)));
} else if (salarioMenosInss > 4664.68) {
  salarioFinal = salarioMenosInss - Math.abs((869.36 - ((salarioMenosInss * 27.5) / 100)));
}

console.log('Meu salário Bruto é: R$ ' + salario + '\nMeu salário com o INSS descontado é: R$ ' + salarioMenosInss + '\nMeu salário líquido é: R$ ' + salarioFinal);
