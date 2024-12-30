const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Patient extends Model {}

Patient.init({
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  gender: DataTypes.STRING,
  occupation: DataTypes.STRING,
  address: DataTypes.STRING,
  phone: DataTypes.STRING,
  weight: DataTypes.FLOAT,
  height: DataTypes.FLOAT,
  allergies: DataTypes.JSON,
  medicalHistory: DataTypes.TEXT,
}, {
  sequelize,
  modelName: 'Patient',
});

module.exports = Patient;