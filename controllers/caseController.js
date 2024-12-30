const db = require('../models');
const fs = require('fs');
const path = require('path');

exports.getAllCases = async (req, res) => {
  try {
    const clinicalData = await db.Case.findAll();
    res.json(clinicalData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.generateCase = async (req, res) => {
  try {
    const newCase = await db.Case.create(req.body);
    res.status(201).json(newCase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCase = async (req, res) => {
  try {
    const caseId = req.params.id;
    await db.Case.destroy({ where: { id: caseId } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour générer un fichier basé sur les cas cliniques
exports.generateClinicalCasesFile = async (req, res) => {
  const { startDate, endDate, fileName, fileFormat } = req.body;

  try {
    const cases = await db.Case.findAll({
      where: {
        entryDate: {
          [db.Sequelize.Op.between]: [new Date(startDate), new Date(endDate)],
        },
      },
    });

    let fileContent;

    // Génération du contenu du fichier selon le format
    if (fileFormat === 'csv') {
      fileContent = 'entryDate,exitDate,patientId,patientAge,patientGender,patientOccupation,patientWeight,patientHeight,allergies,medicalHistory,consultationReason,symptoms,diagnosticMethod,diagnosticResults,medications,surgery,lifestyleChanges,exams,followUp\n';
      cases.forEach((caseItem) => {
        fileContent += `${caseItem.entryDate},${caseItem.exitDate},${caseItem.patientId},${caseItem.patientAge},${caseItem.patientGender},${caseItem.patientOccupation},${caseItem.patientWeight},${caseItem.patientHeight},"${JSON.stringify(caseItem.allergies)}","${caseItem.medicalHistory}","${caseItem.consultationReason}","${JSON.stringify(caseItem.symptoms)}","${caseItem.diagnosticMethod}","${caseItem.diagnosticResults}","${JSON.stringify(caseItem.medications)}","${JSON.stringify(caseItem.surgery)}","${JSON.stringify(caseItem.lifestyleChanges)}","${JSON.stringify(caseItem.exams)}","${JSON.stringify(caseItem.followUp)}"\n`;
      });
    } else if (fileFormat === 'json') {
      fileContent = JSON.stringify(cases, null, 2);
    } else {
      return res.status(400).json({ message: 'Format de fichier invalide. Utilisez "csv" ou "json".' });
    }

    // Enregistrement du fichier
    const filePath = path.join(__dirname, '..', 'generated', `${fileName}.${fileFormat}`);
    fs.writeFileSync(filePath, fileContent);

    // Renvoie l'URL de téléchargement
    res.json({ url: `/download/${fileName}.${fileFormat}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};