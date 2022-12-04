//import logger
import { sendInfoLog } from '../logs/logger.js';

const getLogError = (req, res) => {
  sendInfoLog(req);
  res.render('error', {error: 'Usuario o contraseña incorrectos', name:'login', url: 'auth/login'})
};

export { getLogError };