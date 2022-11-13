// usingPromiseAll.js

const fs = require('fs').promises;

const files = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

async function main() {
  try {
    const promises = files.map(async (file, index) => {
      await fs.writeFile(`file${index + 1}.txt`, `${file}`)
    }) 
    await Promise.all(promises);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()