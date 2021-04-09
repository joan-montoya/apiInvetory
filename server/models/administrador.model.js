const mongoose = require ('mongoose');

let Schema = mongoose.Schema;

let administradorSchema = new Schema({
    _id: {
        type: String,
        required: [true, 'El id es necesario']   
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    apellidos: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email:{
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria']
    },
    direccion: {
        type: String,
        required: [true, 'La direccion es necesaria']
    },
    curp: {
        type: String,
    },
});

module.exports = mongoose.model('Administrador', administradorSchema);