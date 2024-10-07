const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const {FILES_PATH} = require('./constants');

const readSheets = (sheetsDir) => {

    // Filtra apenas os arquivos com extensão .xlsx no diretório
    const files = fs.readdirSync(sheetsDir).filter(file => path.extname(file) === '.xlsx');

    if (files.length === 0) {
        console.error("Nenhum arquivo .xlsx encontrado no diretório 'sheets'.");
        process.exit(1); 
    }

    // Define o caminho do diretório 'data' para salvar o JSON
    const outputDir = path.join(__dirname, FILES_PATH.LER_ARQUIVOS);

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    return {outputDir, files};

}

const  extractAndCombineSheetTabs = (filePath) => {

    console.log(`Lendo arquivo: ${filePath}`);

    const workbook   = xlsx.readFile(filePath);
    const sheetNames = workbook.SheetNames;
    let combinedData = [];

    // Itera sobre cada aba e combina os dados
    sheetNames.forEach(sheetName => {

        console.log(`Processando aba: ${sheetName}`);

        const sheet    = workbook.Sheets[sheetName];
        const jsonData = xlsx.utils.sheet_to_json(sheet);

        combinedData   = combinedData.concat(jsonData);

    });

    console.log(`Dados extraídos de ${filePath}`);

    return combinedData;

}

module.exports = {
    readSheets,
    extractAndCombineSheetTabs
}