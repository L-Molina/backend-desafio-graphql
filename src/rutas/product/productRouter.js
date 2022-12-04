import { Router } from 'express';
import { getProducts, postProduct } from "../../controllers/products.js";

//router
const products = Router();

products.get("/", getProducts);
products.post("/", postProduct);

export default products;