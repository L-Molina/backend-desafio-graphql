import express from 'express';

let router = express.Router();

//routers
import home from './other/homeRouter.js';
import productsList from './product/productListRouter.js'
import products from './product/productRouter.js'
import auth from "./user/authRouter.js";
import user from "./user/userRouter.js";
import info from "./user/infoRouter.js";
import graphql from "./product/graphqlRouter.js";
import error from './other/errorRouter.js';

//middlewares
router.use("/lista-productos", productsList);
router.use("/productos", products);
router.use("/auth", auth);
router.use("/user", user); 
router.use("/", home);
router.use("/info", info);
router.use("*", error);

//desafio
router.use("/graphql", graphql);

export { router };