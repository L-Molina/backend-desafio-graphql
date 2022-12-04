import { getUser, getAll, save, deleteById } from '../servicios/usuarios.js';

//import logger
import { sendInfoLog } from '../logs/logger.js';

const getResgister = (req, res) => {
  res.render('register');
}

const postRegister = async (req, res) => {
  sendInfoLog(req);
  const file = req.file;
  const image = file.filename;
  const {username, edad, telefono, direccion, password, email } = req.body
  save({ username, email, edad, telefono, direccion, password, image })
  .then (user => { 
    if (!user) {
      return res.render('error', { error: 'Usuario ya registrado', name:'register', url: 'auth/register' })       
    } 
    sendInfoLog(req);  
    return res.render('succes')
  })
  .catch(err => {
    console.log(err);
    res.render('error', { error: 'Error al registrar usuario', name:'register', url: 'auth/register' })    
  })
}

export { getResgister, postRegister };