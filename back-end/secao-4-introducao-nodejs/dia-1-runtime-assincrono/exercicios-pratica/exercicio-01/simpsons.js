
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

// const fs = require('fs').promises;
// const readline = require('readline-sync');


// async function readCharadter(id) {
//   try {
//     const response = await fs.readFile('./simpsons.json', 'utf-8');
//     const allCharacter = JSON.parse(response);
//     const filteredCharacter = allCharacter.find((sim) => sim.id === id);
//     console.log(filteredCharacter);
//   } catch (erro) {
//     console.error(`id não encontrado: ${erro.message}`)
//   }
  
  
// }

// async function main() {
//   const id = readline.question('digite id ');
//   await readCharadter(id)
// }

// main();

// ================================================================================ //

// ================================================================================ //
// // C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

// const fs = require('fs').promises;

// async function readCharacter() {
//   try {
//     const contentJSON = await fs.readFile('./simpsons.json', 'utf-8');
//     const allCharacter = JSON.parse(contentJSON);
//     const filteredCharacter = allCharacter.filter((sim) => sim.id !== '10' && sim.id !== '6' );
//     console.log(filteredCharacter);
//     await fs.writeFile('./simpsons.json', JSON.stringify(filteredCharacter));
//   } catch(error) {
//     console.log('Algo de errado não está certo');
//   }
// }

// function main() {
//   readCharacter();
// }

// main();

// ================================================================================ //

// ================================================================================ //
// D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

// const fs = require('fs').promises;

// async function readCharacter() {
//   try {
//     const contentJSON = await fs.readFile('./simpsons.json', 'utf-8');
//     const allCharacter = JSON.parse(contentJSON);
//     const familyIds = [1, 2, 3, 4];
//   const simpsonsFamily = allCharacter
//     .filter((simpson) => familyIds.includes(Number(simpson.id)));
//     await fs.writeFile('simpsonFamily.json', JSON.stringify(simpsonsFamily));
//   } catch(error) {
//     console.log('Algo de errado não está certo');
//   }
// }

// function main() {
//   readCharacter ();
// }

// main();

// ================================================================================ //

// ================================================================================ //
// // E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

// const fs = require('fs').promises;

// async function readCharacter() {
//   try {
//     const contentJSON = await fs.readFile('./simpsonFamily.json', 'utf-8');
//     const allCharacter = JSON.parse(contentJSON);
//     allCharacter.push({ id: '5', name: 'Nelson Muntz'})
//     await fs.writeFile('./simpsonFamily.json', JSON.stringify(allCharacter));
//   } catch(error) {
//     console.log('Algo de errado não está certo');
//   }
// }

// function main() {
//   readCharacter ();
// }

// main();
// ================================================================================ //

// ================================================================================ //
// F - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
const fs = require('fs').promises;

async function readCharacter() {
  try {
    const contentJSON = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const allCharacter = JSON.parse(contentJSON);
    allCharacter.map((sim) => { 
      if (sim.name === 'Nelson Muntz') sim.name = 'Maggie Simpson'
    })
    console.log(allCharacter);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(allCharacter));
  } catch(error) {
    console.log('Algo de errado não está certo');
  }
}

function main() {
  readCharacter ();
}

main();

// ================================================================================ //