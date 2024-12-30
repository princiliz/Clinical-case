const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assure-toi que ce chemin est correct

class Case extends Model {}

Case.init({
  entryDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  exitDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  patientId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  patientAge: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  patientGender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  patientOccupation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  patientWeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  patientHeight: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  allergies: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  medicalHistory: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  consultationReason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  symptoms: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  diagnosticMethod: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  diagnosticResults: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  medications: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  surgery: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  lifestyleChanges: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  exams: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  followUp: {
    type: DataTypes.JSON,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Case',
});

module.exports = Case;