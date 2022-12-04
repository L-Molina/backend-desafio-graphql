import ContenedorMongoDb from '../../ContenedorMongoDb.js';
import { Message } from "../../models/Message.js"; 

class MessageDaoMongoDb extends ContenedorMongoDb {
  constructor () {
    super(Message) 
  }
}

export { MessageDaoMongoDb };