const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;
const mongoUrl = '<tu_cadena_de_conexión_mongodb>'; // Reemplaza con tu cadena de conexión

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let db;

MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
  if (err) return console.error(err);
  console.log('Conectado a la base de datos');
  db = client.db('<nombre_de_la_base_de_datos>'); // Reemplaza con el nombre de tu base de datos
  app.listen(port, () => {
    console.log(`Servidor web escuchando en el puerto ${port}`);
  });
});

app.get('/data', (req, res) => {
  db.collection('data')
    .find()
    .toArray((err, result) => {
      if (err) return console.error(err);
      res.send(result);
    });
});

app.post('/data', (req, res) => {
  const newData = {
    name: req.body.name,
    email: req.body.email,
  };
  db.collection('data').insertOne(newData, (err, result) => {
    if (err) return console.error(err);
    res.redirect('/');
  });
});

app.put('/data/:id', (req, res) => {
  const id = req.params.id;
  const newData = {
    name: req.body.name,
    email: req.body.email,
  };
  db.collection('data').updateOne(
    { _id: ObjectId(id) },
    { $set: newData },
    (err, result) => {
      if (err) return console.error(err);
      res.sendStatus(200);
    }
  );
});

app.delete('/data/:id', (req, res) => {
  const id = req.params.id;
  db.collection('data').deleteOne({ _id: ObjectId(id) }, (err, result) => {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});
