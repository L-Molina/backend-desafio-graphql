const data = {
  Argumentos: process.argv.slice(2),
  Nombre_de_Plataforma: process.platform,
  Version_Node: process.version,
  Path_de_Ejecucion: process.execPath,
  Process_id: process.pid,  
  Carpet_de_Proyecto: process.cwd(),  
}

const getInfo = () => {
  return data;
}

export { getInfo };