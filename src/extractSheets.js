const {extractAndCombineSheetTabs, readSheets} = require('./utils/sheetUtils');
const fs         = require('fs');
const path       = require('path');


const sheetsDir = './sheets';
const {outputDir, files} = readSheets(sheetsDir);

files.forEach(file => {

  const filePath = path.join(sheetsDir, file);

  // Extrai e combina os dados das abas da planilha atual
  const combinedData = extractAndCombineSheetTabs(filePath);

  // Define o nome do arquivo de saída (sem extensão .xlsx)
  const fileName = path.basename(filePath, path.extname(filePath));
  const outputFilePath = path.join(outputDir, `${fileName}.json`);
  console.log(`Salvando arquivo combinado: ${outputFilePath}`); 

  // Salva os dados combinados em um único arquivo JSON
  fs.writeFileSync(outputFilePath, JSON.stringify(combinedData, null, 2));

  console.log(`Dados combinados e extraídos com sucesso para ${outputFilePath}!`);

});
