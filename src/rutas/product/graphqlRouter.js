import { Router } from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "../middleware/graphql/buildSchema.js";
import {getProducts, getProductById, createProduct, updateProducts, deleteProducts} from "../controllers/productsGraphql.js";

const graphql = Router();

graphql.use(
  '/',
  graphqlHTTP({
    schema: schema,
    rootValue: {
      getProducts,
      getProductById,
      createProduct,
      updateProducts,      
      deleteProducts
    },
    graphiql: true
  })
);

export default graphql;