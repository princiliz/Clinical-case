const db = require('../models');

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await db.Patient.findAll();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des patients.' });
  }
};

exports.createPatient = async (req, res) => {
  try {
    const newPatient = await db.Patient.create(req.body);
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du patient.', error });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const patientToDelete = await db.Patient.destroy({ where: { id: req.params.id } });
    if (patientToDelete) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Patient non trouvé.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du patient.', error });
  }
};