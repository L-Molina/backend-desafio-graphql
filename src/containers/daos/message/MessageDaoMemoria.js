import ContenedorMemoria from "../../ContenedorMemoria.js";
import { messages } from '../../../dataBase/memoria.js';

class MessageDaoMemoria extends ContenedorMemoria {
  constructor () {
    super(messages) 
  }
}

export {MessageDaoMemoria};   