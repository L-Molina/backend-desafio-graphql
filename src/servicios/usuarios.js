import { usersDao } from '../containers/daos/index.js';

const getAll = async () => {
  const users = await usersDao.list();
  return users;
};

const getUser = async (id) => {
  const user = await usersDao.getById(id);
  return user;
};

const save = async (user) => {
  const newUser = await usersDao.save(user);
  return newUser;
};

const deleteById = async (id) => {
  const user = await usersDao.deleteById(id);
  return user;
};

export { getUser, getAll, save, deleteById };