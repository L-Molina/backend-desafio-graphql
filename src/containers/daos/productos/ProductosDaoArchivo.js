import ContenedorArchivo from "../../ContenedorArchivo.js";

const url = './db/products.json'

class ProductosDaoArchivo extends ContenedorArchivo {
  constructor() {
    super("productos.json");
  }
}

export { ProductosDaoArchivo }