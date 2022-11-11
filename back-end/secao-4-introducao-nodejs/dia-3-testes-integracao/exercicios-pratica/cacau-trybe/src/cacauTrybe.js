// src/cacauTrybe.js

const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybeFile = async (content) => {
  try {
    const completePath = join(__dirname, path);
    await fs.writeFile(completePath, JSON.stringify(content));
  } catch (e) {
    console.error('Erro ao salvar o arquivo', e.message);
    return null;
  }
}

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const searchChocolatesName = async (name) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.name.toLowerCase().includes(name.toLowerCase()));
}

const updateChocolate = async (id, update) => {
  const cacauTrybe = await readCacauTrybeFile();
  const newChocolate = cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
  const updated = {
    id: id,
    name: name,
    brandId: brandId
  }
  newChocolate.push(updated);
  writeCacauTrybeFile()
  return updated;

}

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    searchChocolatesName,
    updateChocolate,
};