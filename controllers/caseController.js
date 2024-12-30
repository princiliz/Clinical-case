const db = require('../models');

exports.getAllCases = async (req, res) => {
  try {
    const cases = await db.Case.findAll();
    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des cas.' });
  }
};

exports.generateCase = async (req, res) => {
  try {
    const newCase = await db.Case.create(req.body);
    res.status(201).json(newCase);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du cas clinique.', error });
  }
};

exports.deleteCase = async (req, res) => {
  try {
    const caseToDelete = await db.Case.destroy({ where: { id: req.params.id } });
    if (caseToDelete) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Cas clinique non trouvé.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du cas clinique.', error });
  }
};