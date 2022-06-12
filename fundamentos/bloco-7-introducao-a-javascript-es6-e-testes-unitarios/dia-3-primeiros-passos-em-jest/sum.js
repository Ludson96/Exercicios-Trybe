// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// module.exports = sum;

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// module.exports = myRemove;

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// module.exports = myFizzBuzz;

// function encode(string) {
//   let codificar = '';
//   for (let index = 0; index < string.length; index += 1) {
//     if (string[index] === 'a') {
//       codificar += '1';
//     } else if (string[index] === 'e') {
//       codificar += '2';
//     } else if (string[index] === 'i') {
//       codificar += '3';
//     } else if (string[index] === 'o') {
//       codificar += '4';
//     } else if (string[index] === 'u') {
//       codificar += '5';
//     } else {
//       codificar += string[index];
//     }
//   }
//   return codificar;
// }
// function decode(string) {
//   let codificar = '';
//   for (let index = 0; index < string.length; index += 1) {
//     if (string[index] === '1') {
//       codificar += 'a';
//     } else if (string[index] === '2') {
//       codificar += 'e';
//     } else if (string[index] === '3') {
//       codificar += 'i';
//     } else if (string[index] === '4') {
//       codificar += 'o';
//     } else if (string[index] === '5') {
//       codificar += 'u';
//     } else {
//       codificar += string[index];
//     }
//   }
//   return codificar;
// }

// module.exports = { encode, decode };

// function techList(array, nome) {
// array.sort();
// let tecnologia = [];
// if (array.length == []) {
//   tecnologia = 'Vazio!';
// } else {
//   for (let index = 0; index < array.length; index += 1) {
//     tecnologia.push({
//       tech: array[index],
//       name: nome,
//     });
//   }
// }
// return tecnologia;
// }

// module.exports = techList;

// function hydrate(string) {
//   let reg = /\d+/g;
//   let concat = string.match(reg);
//   let result = 0;
//   for (let index = 0; index < concat.length; index += 1) {
//     result += parseInt(concat[index]);
//   }
//   if (result > 1) {
//     return result + ' copos de água';
//   } return result + ' copo de água';

// }

// module.exports = hydrate;