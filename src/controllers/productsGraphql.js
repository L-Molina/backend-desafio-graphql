import {getAllProducts, getProduct, saveProduct, updateProduct, deleteProduct} from '../servicios/productos.js';

const getProducts = async () => {  
  const productos = await getAllProducts();
  return productos;  
};

const getProductById = async (id) => { 
  const producto = await getProduct(id);
  console.log("verificando la dara", producto);
  return producto;
};

const createProduct = async (el) => {

  const {name, description, code, thumbnail, price, stock} = el.datos  
  const producto = await saveProduct({name, description, code, thumbnail, price, stock});
  return producto;
};

const updateProducts = async (el) => {   
  const id = el.id;  
  const {name, description, code, thumbnail, price, stock} = el.datos
  const info = await updateProduct(id, {name, description, code, thumbnail, price, stock});
  const data = {data: info};  
  return data;
};

const deleteProducts = async (el) => {  
  const info = await deleteProduct(el._id);
  const data = {data: info};
  return data;  
};

export { getProducts, getProductById, createProduct, updateProducts, deleteProducts };