import axios from "axios";

const url = "http://localhost:8080/lista-productos";

const getProducts = async () => {
  try {
    const response = await axios.get(url);
    console.log('listado de Productis: ', response.data);
  } catch (error) {
    console.log(error);
  }
}

const getProduct = async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    console.log(`producto ID:${id}: `, response.data);
  } catch (error) {
    console.log(error);
  }
}

const postProduct = async (product) => {
  try {
    const response = await axios.post(url, product);
    console.log('Producto Guardado: ', response.data);
  } catch (error) {
    console.log(error);
  }
}

const editProduct = async (id, product) => {
  try {
    const response = await axios.put(`${url}/${id}`, product);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

getProducts()
getProduct('636bb40dfae3a818f604cb2d')