Instalação:

1 - Instalação Chocolatey;
  1.1 - Abrir power shell como administrador;
  1.2 - Executar o seguinte comando -> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
  
2 - instalar nodejs

/**
 * Metodos HTTP (GET, POST, PUT, DELETE)
 * get -> buscar informação;
 * post -> criar/salvar informação;
 * put -> editar informação;
 * delete -> deletar informação
 */

/**
 * Tipos de Parametos:
 * 
 * Query Params: req.query (Usado para Filtros, ordenação, paginação...)
 * Route Params: req.params (Identificar um recurso para atualização ou exclusão)
 * Body: req.body (Dados para uma criação ou alteração de um recurso)
 */
