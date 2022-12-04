import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import {usersDao} from "../containers/Daos/index.js";

//passport-local
passport.use(
  new LocalStrategy({usernameField: 'email'}, async (username, password, done) => {
    /* busco si existe usuario */
    const userExist = await usersDao.findByEmail(username);
    if (!userExist) return done(null, false);
    /* comparo la contraseña */
    bcrypt.compare(password, userExist.password, (err, isMatch) => {
      if (err) console.log(err);
      if (isMatch) return done(null, userExist);
      return done(null, false);
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);  
  return done(null, user);
});

export default passport;