import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Producto {
    _id: ID!,
    name: String,
    description: String,
    code: String,
    thumbnail: String,
    price: Int,
    timestamp: String,
    stock: Int  
    data: String 
  } 
  input ProductoInput {
    name: String,
    description: String,
    code: String,
    thumbnail: String,
    price: Int,    
    stock: Int
  }
  type Query {
    getProducts: [Producto],    
    getProductById(_id: ID!): Producto  
  }
  type Mutation {
    createProduct(datos: ProductoInput): Producto,
    updateProducts(id: ID!, datos: ProductoInput): Producto,
    deleteProducts(_id: ID!): Producto
  }
`);

export default schema;