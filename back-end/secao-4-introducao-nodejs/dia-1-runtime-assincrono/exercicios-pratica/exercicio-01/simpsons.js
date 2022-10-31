
// // Exercício 6
// 🚀 Realize o download deste arquivo e salve-o como simpsons.json. Utilize o arquivo baixado para realizar os requisitos abaixo.

// Utilize async/await para escrever seu código. Procure não utilizar callbacks.

// ================================================================================ //

// // A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

// const fs = require('fs').promises;
// const readline = require('readline-sync');

// async function readCharacter() {
//   try {
    // const response = await fs.readFile('./simpsons.json', 'utf-8')
//     const allCharacter = JSON.parse(response);
//     allCharacter.map((sim) => console.log(`${sim.id} - ${sim.name}`))
//   } catch (erro) {
//     console.error(`Erro ao ler o arquivo: ${erro.message}`);
//   }
// }

// function main() {
//   readCharacter();
// }

// main();


// ================================================================================ //

// ================================================================================ //
// // B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

const fs = require('fs').promises;
const readline = require('readline-sync');


async function readCharadter(id) {
  try {
    const response = await fs.readFile('./simpsons.json', 'utf-8');
    const allCharacter = JSON.parse(response);
    const filteredCharacter = allCharacter.filter((sim) => sim.id === id);
    console.log(filteredCharacter[0].name);
  } catch (erro) {
    console.error(`id não encontrado: ${erro.message}`)
  }
  
  
}

async function main() {
  const id = readline.question('digite id ');
  await readCharadter(id)
}

main();

// ================================================================================ //