// // 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.co
// const cadastro = (fullName) => {
//   const email = fullName.toLowerCase().split(' ').join('_');
//   return { fullName, email: `${email}@trybe.com` };
// }

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback ('Luiza Drumond'),
//     id3: callback ('Carla Paiva'),
//   }
//   return employees;
// };

// console.log(newEmployees(cadastro));

// // 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
// const validation = (apostado) => {
//   const number = Math.floor((Math.random() * 5) + 1);
//   console.log(`O número sorteado é: ${number}`);
//   if (number === apostado) {-
//     return true;
//   }

//   return false;
// }

// const hof = (callback, func) => {
//   if (func(callback)) {
//     return 'Parabéns você ganhou';
//   }

//   return 'Tente novamente';
// }



// console.log(hof(4, validation));

// // 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const validation = (right, student) => {
//   let pontos = 0;
//   for (let index = 0; index < right.length; index += 1) {
//     if (student[index] === right[index]) {
//       pontos += 1;
//     } if (student[index] !== right[index]) {
//       pontos -= 0.5;
//     }
//   }
//   return pontos;
// }

// const hof = (right, student, func) => {
//   console.log(func(right, student));
// }

// hof(RIGHT_ANSWERS, STUDENT_ANSWERS, validation);
