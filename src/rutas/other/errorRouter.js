import { Router } from "express";
import { getError , postError, deleteError, putError} from "../../controllers/error.js";

//router
const error = Router();

error.get("*", getError);
error.post("*", postError);
error.delete("*", deleteError);
error.put("*", putError);


export default error; 