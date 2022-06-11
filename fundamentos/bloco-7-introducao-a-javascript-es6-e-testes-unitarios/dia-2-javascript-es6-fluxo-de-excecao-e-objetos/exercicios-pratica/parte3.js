const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// // 1 - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
// const addTurn = (lesson, turno, period) => {
//   lesson[turno] = period;
//   console.log(lesson);
// }

// addTurn(lesson2, 'turno', 'noite');

// // 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro
// const listObject = object => {
//   const allKeys = Object.keys(object);
//   console.log(allKeys);
// }

// listObject(lesson3);

// // 3 - Crie uma função para mostrar o tamanho de um objeto
// const sizeObjetct = object => Object.keys(object).length;
// console.log(sizeObjetct(lesson3));

// // 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// const listValues = object => Object.values(object);
// console.log(listValues(lesson3));

// // 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

// // 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

// const allStudents = (allLessons) => {
//   const todoStudents = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
//   return todoStudents;
// }

// console.log(allStudents(allLessons));

// // 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// const obtValues = (object, position) => {
//   const posicao = Object.values(object);
//   return posicao[position];
// }

// console.log(obtValues(lesson1, 0))

// // 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// const verifyPair = (object, key, value) => {
//   const pair = Object.entries(object);
//   for (let index = 0; index < pair.length; index += 1) {
//     if (key == pair[index][0] && value == pair[index][1]) {
//     return true;
//     }
//   }
//   return false;
// }


// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// // Bonus
// // 1 - 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5
// const assistMat = () => {
//   let total = 0;
//   if (allLessons.lesson1.materia == 'Matemática') {
//     total += allLessons.lesson1.numeroEstudantes;
//   }
//   if (allLessons.lesson2.materia == 'Matemática') {
//     total += allLessons.lesson2.numeroEstudantes;
//   }
//   if (allLessons.lesson3.materia == 'Matemática') {
//     total += allLessons.lesson3.numeroEstudantes;
//   }
//   return `A quantidade da alunos que estão assistindo as aulas de matemática são ${total} alunos`;
// }

// console.log(assistMat());
