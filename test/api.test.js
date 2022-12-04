import mongoose from "mongoose";
import { expect } from "chai";
import supertest from "supertest";
import app from "../app.js";

let request;
let server;

describe("test api", () => {
  before(async function () { 
    await connectDb();
    server = await startServer();    
    request = supertest(
      `http://localhost:${server.address().port}/lista-productos`
    );
  });

  after(function () {
    mongoose.disconnect();
    server.close();
  });

  describe("GET", () => {
    it("debería retornar un status 200", async () => {   
      const response = await request.get("/");        
      expect(response.status).to.equal(1000); 
    })
  });

  describe("POST", () => {    
    it("debería incorporar un producto", async () => {     
      const producto = {name: "test", description: "test", code: "test", thumbnail: "test", price: 1, stock: 1}
      const response = await request.post("/").send(producto); 
      expect(response.status).to.eql(1000);
      const product = response.body;  
      expect(product).to.include.keys("name", "description");
      expect(product.name).to.eql(producto.name);
      expect(product.description).to.eql(producto.description);
    });
  });  

  describe("DELETE", () => {
    it("debería eliminar un producto", async () => {
      const data = await request.get("/");
      const arrLength = data.body.length;
      const id = "63173c6af363453b16898314"
      const response = await request.delete(`/${id}`); 
      const data2 = await request.get("/");
      const arrLength2 = data2.body.length;
      expect(response.status).to.eql(200);
      expect(arrLength2).to.eql(arrLength - 1);
    });
  });

  describe("PUT", () => {
    it("debería modificar un producto", async () => {
      const id = "63173c6af363453b16898315" 
      const producto = {name: "test4", description: "test4", code: "test4", thumbnail: "test4", price: 2, stock: 2}
      const response = await request.put(`/${id}`).send(producto);
      const product = await request.get(`/${id}`);
      expect(response.status).to.eql(1000);
      expect(product.body.name).to.eql(producto.name);
    });
  });

});

/* connectDb */
async function connectDb() {
  const URL = process.env.MONGO_URL || 'mongodb://localhost:27017/test'  
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Base de datos conectada!");
  } catch (error) {
    throw new Error(`Error de conexión en la base de datos: ${err}`);
  }
}

/* startServer */
async function startServer() {
  return new Promise((resolve, reject) => {
    const PORT = 0;
    const server = app.listen(PORT, () => {
      console.log(
        `Servidor express escuchando en el puerto ${server.address().port}`
      );
      resolve(server);
    });
    server.on("error", (error) => {
      console.log(`Error en Servidor: ${error}`);
      reject(error);
    });
  });
}