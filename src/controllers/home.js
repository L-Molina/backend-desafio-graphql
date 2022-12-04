import { getUser } from '../servicios/usuarios.js';
import { getAllProducts } from '../servicios/productos.js';

//import logger
import { sendInfoLog } from '../logs/logger.js';

const getHome = async (req, res) => {  
  const userInfo = await getUser(req.user._id);
  const userData = {
    username : userInfo.username,
    email : userInfo.email,
    telefono : userInfo.telefono,
    direccion : userInfo.direccion,
    edad : userInfo.edad,
    _id : userInfo._id,
    image : userInfo.image
  }  
  sendInfoLog(req);
  res.render("home", {
    userData   
  });
};

export { getHome };