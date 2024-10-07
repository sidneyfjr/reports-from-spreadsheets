const XLSX = require('xlsx');

function generateSheet(dados, nomeArquivo) {
    // Cria uma nova planilha
    const worksheet = XLSX.utils.json_to_sheet(dados);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados');

    // Salva a planilha
    XLSX.writeFile(workbook, `${nomeArquivo}.xlsx`);
}

module.exports = generateSheet;