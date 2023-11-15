// importando librerias
import express from 'express';

// inicializacion del server
const app = express();
const PORT = 8080;
app.use(express.json());


// traer todos los estudiantes
app.get('/students', (req, res) => {

  try {
    


  } catch (error) {
    res.send({error: `Error al traer los estudiantes: ${error}`});
  }
});







// corriendo el server
const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${server.address().port}`);
});