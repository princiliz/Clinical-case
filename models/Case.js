const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Case extends Model {}

Case.init({
  entryDate:DataTypes.DATE,
  exitDate:DataTypes.DATE,
  patientId: DataTypes.UUID,
  patientAge: DataTypes.INTEGER,
  patientGender: DataTypes.STRING,
  patientOccupation: DataTypes.STRING,
  patientWeight: DataTypes.FLOAT,
  patientHeight: DataTypes.FLOAT,
  allergies: DataTypes.JSON,
  medicalHistory: DataTypes.TEXT,
  consultationReason: DataTypes.STRING,
  symptoms: DataTypes.JSON,
  diagnosticMethod: DataTypes.STRING,
  diagnosticResults: DataTypes.TEXT,
  medications: DataTypes.JSON,
  surgery: DataTypes.JSON,
  lifestyleChanges: DataTypes.JSON,
  exams: DataTypes.JSON,
  followUp: DataTypes.JSON,
}, {
  sequelize,
  modelName: 'Case',
});

module.exports = Case;