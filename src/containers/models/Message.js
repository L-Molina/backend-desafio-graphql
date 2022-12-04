import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  email: { type: String, required: true, max: 100 },
  fecha: { type: String, required: true, max: 100 },  
  mensaje: { type: String, required: true, max: 100 },
});

export const Message = model('Message', messageSchema);