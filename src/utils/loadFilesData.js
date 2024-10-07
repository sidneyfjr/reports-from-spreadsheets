const {FILES_PATH}   = require('./constants');
const { readJSON } = require('./fileUtils');

const relatoriosFilePath   = FILES_PATH.RELATORIOS;
const gruposFilePath       = FILES_PATH.GRUPOS;
const publicadoresFilePath = FILES_PATH.PUBLICADORES;


const relatoriosData    = readJSON(relatoriosFilePath);
const gruposData        = readJSON(gruposFilePath);
const publicadoresData  = readJSON(publicadoresFilePath);


module.exports = {
    relatoriosData,
    gruposData,
    publicadoresData
}