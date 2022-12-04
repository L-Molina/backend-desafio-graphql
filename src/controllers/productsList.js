import { getAllProducts } from '../servicios/productos.js';

const getProductsList = async (req, res) => {
  const productos = await getAllProducts();
  res.status(200).send(productos);
};

const getProductsListById = async (req, res) => {
  const { id } = req.params;
  const producto = await getProduct(id);
  res.status(200).send(producto);
};

const postProductsList = async (req, res) => {
  const {name, description, code, thumbnail, price, stock} = req.body  
  const producto = await saveProduct({name, description, code, thumbnail, price, stock});
  res.status(200).send(producto);
};

const updateProductsList = async (req, res) => {
  const { id } = req.params;
  const {name, description, code, thumbnail, price, stock} = req.body
  const producto = await updateProduct(id, {name, description, code, thumbnail, price, stock});
  res.status(200).send(producto);
};

const deleteProductsList = async (req, res) => {
  const { id } = req.params;
  const producto = await deleteProduct(id);
  res.status(200).send(producto);
};

export { getProductsList, getProductsListById, postProductsList, updateProductsList, deleteProductsList };