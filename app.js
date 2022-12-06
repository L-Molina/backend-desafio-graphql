import express from 'express';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//express
const app = express();

//MongoAtlas
import MongoStore from 'connect-mongo';
const advanceOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//conexion a la DB para las sesiones
app.use(cookieParser());
let mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

//middleware para las sesiones
app.use(
  session({
    store: new MongoStore({ 
      mongoUrl: mongoUrl,
      mongoOptions: advanceOptions   
    }),
    secret: "coderhouse",
    resave: true,
    saveUninitialized: true,
    rolling: true, 
    cookie: { maxAge: 60000000 },
  })

);

//middleware para passport
app.use(passport.initialize());
app.use(passport.session());

//router
import {router} from './src/routes/index.js';

//plantillas
app.set('views', './views');
app.set('view engine', 'ejs');

//middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

//socket.io 
import http from 'http';
import { Server } from 'socket.io';
const io = new Server(http);
const httpServer = http.createServer(app);
io.attach(httpServer);

//chat --> controllers
import { getChat, sendMessage } from './src/controllers/chat.js';

io.on('connection', async function(socket) {
  console.log('Un cliente se ha conectado'); 
  const messages = await getChat();  
  socket.emit('messages', messages);
  io.sockets.emit('productos');
  socket.on ('new-message', async function (data){
    sendMessage(data)
    .then(async (newMessage) => {             
      const messages = await getChat();  
      io.sockets.emit('messages', messages);
    })  
  });
});

//levanto el server
const port = process.env.PORT || 8080;

httpServer.listen(port, () => {
  console.log(`Servidor http escuchando en el puerto ${port}`);
});

export default app;
