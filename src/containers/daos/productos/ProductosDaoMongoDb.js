import ContenedorMongoDb from '../../ContenedorMongoDb.js';
import { Product } from "../../models/Product.js"; 

class ProductosDaoMongoDb extends ContenedorMongoDb {
  constructor () {
    super(Product) 
  }
}

export {ProductosDaoMongoDb}