import { log } from 'console'
import * as fs from 'fs'

//list
const list = async (ruta) => {
  try {      
    const data = fs.readFileSync(ruta, 'utf-8')
    const dataObj = JSON.parse(data) 
    return (dataObj)
  } catch (err) {      
    throw new Error('No se pudo leer archivo', err)
  }
}

//save
const save = async (product, ruta) => {
  try {  
    let timestamp = new Date().getTime();            
    const arr = await list(ruta)      
    const previusID = lastID(arr)      
    product.id = previusID + 1
    product.timestamp = timestamp 
    arr.push(product)
    fs.writeFileSync(ruta, JSON.stringify(arr, null, 2)) 
    return(product)
  }
  catch (err) {      
    throw new Error('Error de escritura', err)
  } 
} 

//getById
const getById = async (x, ruta) => {     
  try {             
    const arr = await list(ruta)    
    if (arr.length === 0) {return "Archivo Vacio"} 
    return (arr.find(el => el.id == x) || { error: 'Producto no encontrado' })
  } catch (err) {  
    throw new Error('Error de Lectura', err)
  }
}

//deleteById
const deleteById = async (i, ruta) => {  
  try {
    const arr = await list(ruta)    
    let index = arr.findIndex(x => x.id == i) 
    if (index == -1) {
      return ({ error: 'Producto no encontrado' })
    }  
    const newArr = arr.filter(el => el.id != i)    
    fs.writeFileSync(ruta, JSON.stringify(newArr, null, 2))    
    return "Producto Eliminado" 
  } 
  catch (err) {    
    throw new Error('Error de escritura', err)
  }  
}

//changeById
const changeById = async (i, object, ruta) => {
  try {
    const arr = await list(ruta) 
    let index = arr.findIndex(x => x.id == i)
    if (index == -1) {
      return ({ error: 'Producto no encontrado' })
    } 
    object.id = i
    object.timestamp = arr[index].timestamp    
    const editedProduct = {...arr[index], ...object}    
    arr[index] = editedProduct
    fs.writeFileSync(ruta, JSON.stringify(arr, null, 2)) 
    return "Producto Reemplazado"
  }
  catch (err) {    
    throw new Error('Error de escritura', err)
  } 
} 

export { list, save, getById, deleteById, changeById }