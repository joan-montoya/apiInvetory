require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var bodyParser = require('body-parser');
// Habilita CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

 
app.get('/',function(req, res){
  res.send('<h1>Equpipo 6-4D </h1>');
});

app.use(require('./routes/usuario'));
app.use(require('./routes/categoria'));
app.use(require('./routes/producto'));
app.use(require('./routes/login'));
app.use(require('./routes/administrador'));
app.use(require('./routes/conductor'));

 mongoose.connect('mongodb+srv://admin:3526@cluster0.4pvv9.mongodb.net/inventario',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
 },(err, res) => {
  if(err) throw err;
  console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, ( )=> {
  console.log('La aplicacion esta en linea por el puerto', process.env.PORT)
});