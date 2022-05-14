// //Exercícios dos conteúdos

// //Arrays (listas)

// //Excercicio 1
// //Obtenha o valor "Serviços" do array menu:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// //Exercício 2
// //Procure o índice do valor "Portfólio" do array menu:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf("Portfólio");

// console.log(indexOfPortfolio);

// Exercício 3
// Adicione o valor "Contato" no final do array menu:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push("Contato")
// console.log(menu);

// //For

// //Exercício 1
// //Utilize o for para imprimir os elementos da lista groceryList com o console.log():

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for(let index = 0; index < groceryList.length; index += 1){
//     console.log(groceryList[index]);
// }

// //For/of

// // Exercício 1
// // Utilize o for/of para imprimir os elementos da lista names com o console.log():

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let name of names){
//     console.log(name);
// }

// // Exercicios

// //1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let number of numbers){
//     console.log(number);
// }

// //2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// var resultado = 0;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let number of numbers){
//     resultado += number;
// }

// console.log(resultado);

// //3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// var resultado = 0;
// var i = 0;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let number of numbers){
//     resultado += number;
//     i +=1
// }

// console.log('Sua média é: ' + resultado/i);

// //4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// var resultado = 0;
// var i = 0;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let number of numbers){
//     resultado += number;
//     i +=1
// }
// var media = resultado/i;
// if (media > 20){
//     console.log('Valor maior que 20');
// } else {
//     console.log('Valor menor ou igual a 20');
// }

// //5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// var valorMaior = 0;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let number of numbers){
//     if(number > valorMaior){
//         valorMaior = number;
//     }
// }

// console.log('O Valor maior é: ' + valorMaior);

// //6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// var i = 0;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let number of numbers){
//     if(number % 2 === 1){
//         i += 1; 
//     }
// }

// console.log('Existem ' + i + ' valores ímpares');

// if(i === 0){
//     console.log('Nenhum valor ímpar encontrado');
// }

// //7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// var valorMenor = 100;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let number of numbers){
//     if(number < valorMenor){
//         valorMenor = number;
//     }
// }

// console.log('O Valor maior é: ' + valorMenor);

// //8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// var meuArray = [];
// for(var i = 1; i <= 25; i += 1){
//     meuArray.push(i);
// }

// console.log(meuArray);

// //9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

// var meuArray = [];
// for(var i = 1; i <= 25; i += 1){
//     meuArray.push(i);
// }

// var resultado = 0;

// for(var i = 0; i < meuArray.length; i += 1){
//     console.log(meuArray[i] / 2);
// }

// //Bônus

// //1 - Ordene o array numbers em ordem crescente e imprima seus valores;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

//   console.log('Seus números em ordem crescentes são: ' + numbers);

// //2 - Ordene o array numbers em ordem decrescente e imprima seus valores;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = numbers.length - 1; index > 0; index -= 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

//   console.log('Seus números em ordem decrescentes são: ' + numbers)

// //3 - Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
for (let index = 0; index < numbers.length; index += 1) {
  if(numbers[index + 1] == undefined){
    newNumbers.push(numbers[index] * 2);
    break;
  }
  newNumbers.push(numbers[index] * numbers[index + 1]);
  }

  console.log(newNumbers);