//import logger
import { sendInfoLog } from '../logs/logger.js';

const getLogin = (req, res) => {
  sendInfoLog(req);
  res.render('login');
}

const postLogin = (req, res) => {
  sendInfoLog(req);
  res.redirect('/');
}

export { getLogin, postLogin };