const {extractAndCombineSheetTabs, readSheets} = require('./utils/sheetUtils');
const fs = require('fs');
const path = require('path');


// Diretório onde estão os arquivos .xlsx
const sheetsDir = './sheets/join';
const {outputDir, files} = readSheets(sheetsDir);

// Inicializa um array vazio para armazenar os dados combinados de todas as planilhas
let allCombinedData = [];

files.forEach(file => {

  const filePath = path.join(sheetsDir, file);

  // Extrai e combina os dados das abas da planilha atual
  const combinedData = extractAndCombineSheetTabs(filePath);

  // Adiciona os dados da planilha atual ao array geral
  allCombinedData = allCombinedData.concat(combinedData);

});

// Define o caminho do arquivo combinado após processar todos os arquivos
const outputFilePath = path.join(outputDir, `relatorios.json`);
console.log(`Salvando arquivo combinado: ${outputFilePath}`); 

// Verifique se há dados a serem gravados
if (allCombinedData.length === 0) {
  console.error("Nenhum dado foi extraído das planilhas.");
} else {
  fs.writeFileSync(outputFilePath, JSON.stringify(allCombinedData, null, 2));
  console.log(`Dados combinados e extraídos com sucesso para ${outputFilePath}`);
}
