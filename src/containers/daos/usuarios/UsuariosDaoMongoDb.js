import ContenedorMongoDB from "../../ContenedorMongoDb.js";
import { User } from "../../models/User.js"; 
import bcrypt from "bcrypt";

class UserDaoMongoDb extends ContenedorMongoDB {
  constructor () {
    super(User) 
  }

	async guardar(obj) {
    try {
      const userExist = await User.findOne({email: obj.email}); 
      if (userExist) { 
        return false; 
      } else { 
        const hashPass = await bcrypt.hash(obj.password, 8) 
        obj.password = hashPass; 
        const data = await super.save(obj);
        console.log(data);
        return data; 
      }      
    } catch (error) {
      console.log(error);
    }
  }
}

export { UserDaoMongoDb }