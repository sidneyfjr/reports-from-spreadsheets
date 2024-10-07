**Objetivo**

Extrair o conteúdo das planilhas com os relatórios e cria arquivos do tipo json.

**Passos**

1 - Copiar arquivos para o diretporio sheets.

    Ex: cp /mnt/c/Users/sidne/Desktop/ALTO_DA_PAZ.xlsx sheets

    As planilhas que serão mescladas em um único arquivo json devem ficar no diretório sheets/join

2 - rodar container com node

    Ex: docker run --rm -it -p 3000:3000 -v $(pwd):/usr/src/app  node:slim /bin/bash

3 - Executar rotina

    # Extrai o conteúdo das planilhas que estão em sheets gerando vários arquivos.
    node extractSheets.js

    # Combina as planilhas que estão em sheets/join em um único arquivo.
    node extractAndCombineSheets.js

    As planilhas serão atualizadas a cada mês. Após isso, ela serão exportadas e atualizarão o banco de dados.
    Os relatórios serão gerados sob demanda.
