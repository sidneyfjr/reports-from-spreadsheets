
// DEV
const  FILES_PATH = {
    GRUPOS: '../data/2024/grupos.json',
    PUBLICADORES: '../data/2024/publicadores.json',
    RELATORIOS: '../data/2024/relatorios.json',
    LER_ARQUIVOS: '../data/2024/'
}

// PROD
// const  FILES_PATH = {
//   GRUPOS: '../data/2025/grupos.json',
//   PUBLICADORES: '../data/2025/publicadores.json',
//   RELATORIOS: '../data/2025/relatorios.json',
//   LER_ARQUIVOS: '../data/2025/'
// }

const MESES = [
    "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", 
    "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
  ];

const MESSAGES = {
  GROUP_ADDED_SUCCESS: "Grupo adicionado com sucesso.",
  GROUP_UPDATED_SUCCESS: "Grupo atualizado com sucesso.",
  GROUP_REMOVED_SUCCESS: "Grupo removido com sucesso.",
  GROUP_NOT_FOUND: 'Grupo não encontrado',
  PUBLICADOR_ADDED_SUCCESS: "Publicador adicionado com sucesso.",
  PUBLICADOR_UPDATED_SUCCESS: "Publicador atualizado com sucesso.",
  PUBLICADOR_REMOVED_SUCCESS: "Publicador removido com sucesso.",
  PUBLICADOR_NOT_FOUND: 'Publicador não encontrado',
  RELATORIO_ADDED_SUCCESS: "Relatório adicionado com sucesso.",
  RELATORIO_UPDATED_SUCCESS: "Relatório atualizado com sucesso.",
  RELATORIO_REMOVED_SUCCESS: "Relatório removido com sucesso.",
  RELATORIO_NOT_FOUND: 'Relatório não encontrado',
  PIONEIRO_NOT_FOUND: 'Pioneiro não encontrado',
}

module.exports = {FILES_PATH, MESES, MESSAGES};