//import logger
import { sendWarnLog } from '../logs/logger.js';

const getError = (req, res) => {   
  sendWarnLog(req);
  res.render("error", {
    error: "404 - No se Encuentra la pagina a la que quieres acceder",
    name: 'Home',
    url: '',
    descripcion: "Ruta no encontrada",
  });  
}

const postError = (req, res) => {
  sendWarnLog(req);
  res.render("error", {
    error: "404 - No se Encuentra la pagina a la que quieres acceder",
    name: 'Home',
    url: '',
    descripcion: "Ruta no encontrada",
  });  
}

const deleteError = (req, res) => {
  sendWarnLog(req);
  res.render("error", {
    error: "404 - No se Encuentra la pagina a la que quieres acceder",
    name: 'Home',
    url: '',
    descripcion: "Ruta no encontrada",
  });  
}

const putError = (req, res) => {
  sendWarnLog(req);
  res.render("error", {
    error: "404 - No se Encuentra la pagina a la que quieres acceder",
    name: 'Home',
    url: '',
    descripcion: "Ruta no encontrada",
  });  
}

export { getError, postError, deleteError, putError };