import { productosDao } from "../containers/Daos/index.js";

const getAllProducts = async () => {
  const products = await productsDao.list();
  return products;
}

const getProduct = async (id) => {
  const product = await productsDao.getById(id);
  return product;
}

const saveProduct = async (product) => {
  const newProduct = await productsDao.save(product);
  return newProduct;
}

const deleteProduct = async (id) => {
  const product = await productsDao.deleteById(id);
  return product;
}

const updateProduct = async (id, product) => {
  const newProduct = await productsDao.changeById(id, product);
  return newProduct;
}

export { getAllProducts, getProduct, saveProduct, deleteProduct, updateProduct };