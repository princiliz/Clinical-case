const express = require('express');
const router = express.Router();
const caseController = require('../controllers/caseController');

router.get('/', caseController.getAllCases);
router.post('/generate', caseController.generateCase);
router.delete('/:id', caseController.deleteCase);

module.exports = router;