//minimist
import minimist from 'minimist';

let productosDao;
let usersDao;
let messagesDao;

const PERS = process.env.PERS || "mongodb";

import dotenv from 'dotenv';
dotenv.config();

switch (PERS) {
  case 'json':
		const ProductosDaoArchivo = await (async () => {let {ProductosDaoArchivo} = await import('./productos/ProductosDaoArchivo.js'); return ProductosDaoArchivo})();
		const MessageDaoArchivo = await (async () => {let {MessageDaoArchivo} = await import('./message/MessageDaoArchivo.js'); return MessageDaoArchivo})();
    productosDao = new ProductosDaoArchivo();
    messagesDao = new MessageDaoArchivo();
		break; 
  case 'mongodb':
    const ProductosDaoMongoDb = await (async () => {let {ProductosDaoMongoDb} = await import('./productos/ProductosDaoMongoDb.js'); return ProductosDaoMongoDb})();     
    const MessageDaoMongoDb = await (async () => {let {MessageDaoMongoDb} = await import('./message/MessageDaoMongoDb.js'); return MessageDaoMongoDb})();    
    const UserDaoMongoDb = await (async () => {let {UserDaoMongoDb} = await import('./usuarios/UsuariosDaoMongoDb.js'); return UserDaoMongoDb})();
    productosDao = new ProductosDaoMongoDb();
    messagesDao = new MessageDaoMongoDb();
    usersDao = new UserDaoMongoDb();
    break;
  case 'memoria':
    const ProductosDaoMemoria = await (async () => {let {ProductosDaoMemoria} = await import('./productos/ProductosDaoMemoria.js'); return ProductosDaoMemoria})();
    const MessageDaoMemoria = await (async () => {let {MessageDaoMemoria} = await import('./message/MessageDaoMemoria.js'); return MessageDaoMemoria})();
    productosDao = new ProductosDaoMemoria();
    messagesDao = new MessageDaoMemoria();
    break;
	default:
    productosDao = new ProductosDaoArchivo();
    messagesDao = new MessageDaoArchivo();
    break;
}

export { usersDao, productosDao, messagesDao };