const fs = require('fs').promises;

async function readVariosArquivocs() {
  const variosArquivos = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFilesPromieses = variosArquivos
  .map((arquivo, i) => fs.writeFile(`./file${i + 1}.txt`, arquivo));
  await Promise.all(createFilesPromieses);
}

readVariosArquivocs()