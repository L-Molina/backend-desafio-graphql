import { getUser } from '../servicios/usuarios.js';

//import logger
import { sendInfoLog } from '../logs/logger.js';

const getUsuario = async (req, res) => {
  sendInfoLog(req);
  const userData = await getUser(req.user._id); 
  res.render('user', {userData});  
}

export { getUsuario };