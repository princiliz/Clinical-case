const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const caseRoutes = require('./routes/cases');
const patientRoutes = require('./routes/patients'); // Ajout des routes des patients
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/cases', caseRoutes);
app.use('/patients', patientRoutes); // Ajout des routes des patients

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});