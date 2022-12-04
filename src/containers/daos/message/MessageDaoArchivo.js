import ContenedorArchivo from "../../ContenedorArchivo.js";
const url = '../../../dataBase/messages.json'

class MessageDaoArchivo extends ContenedorArchivo {
  constructor () {
    super(url) 
  }
}

export  {MessageDaoArchivo};  