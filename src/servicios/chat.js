import '../connection/connection.js';
import { messagesDao } from '../containers/Daos/index.js';

//funcion para mostrar todos los mensajes
const list = async () => {
  const chat = await messagesDao.list();
  return chat;
}

//funcion para guardar un mensaje
const save = async (mensaje) => { 
  const newMessage = await messagesDao.save(mensaje);
  return newMessage; 
}

export { list, save };