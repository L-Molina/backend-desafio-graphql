import { Router } from 'express';
import auth from '../../middleware/auth.js';
import { getHome } from "../../controllers/home.js";
const home = Router();

home.get("/", auth, getHome);

export default home