const express = require('express');
const router = express.Router();
const caseController = require('../controllers/caseController');

router.get('/', caseController.getAllCases);
router.post('/', caseController.generateCase);
router.delete('/:id', caseController.deleteCase);
router.post('/generate', caseController.generateClinicalCasesFile);
router.get('/download/:fileName', (req, res) => {
    const filePath = path.join(__dirname, '..', 'generated', req.params.fileName);
    res.download(filePath, (err) => {
      if (err) {
        res.status(404).send({ message: 'Fichier non trouvé.' });
      }
    });
  });

module.exports = router;