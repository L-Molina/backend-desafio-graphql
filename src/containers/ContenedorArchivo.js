import {list, save, getById, deleteById, changeById} from '../utils/container.js';

class ContenedorArchivo {
  constructor(ruta) {
    this.ruta = ruta;
  }

	//listarTodos
	async listarTodos() {
		const data = await list(this.ruta) 
		console.log(data);    
		return data;
	}
    
	//listar por id
  async listar(x) {
		const data =  await getById(x, this.ruta) 
    console.log(data)   
    return data
	}  

  //guardar
	async guardar(obj) {
		const data = await save(obj, this.ruta)
		console.log(data) 
		return data
	}  

  //actualizar
  async actualizar(i, object) {
    const data = await changeById(i, object, this.ruta)
  	console.log(data) 
  	return data
  }  

  //borrar
  async borrar(x) {
    const data = await deleteById(x, this.ruta)
    console.log(data) 
    return data
  }
} 

export default ContenedorArchivo;