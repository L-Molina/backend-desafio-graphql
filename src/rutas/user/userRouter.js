import { Router } from "express";
import { getUsuario } from "../../controllers/user.js";

const user = Router();

user.get("/", getUsuario);

export default user;