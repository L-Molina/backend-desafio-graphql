import { Router } from "express";
import { getAllInfo } from "../../controllers/info.js";

const info = Router();

info.get("/", getAllInfo);

export default info;