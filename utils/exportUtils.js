// Fonction pour valider une date
const isValidDate = (date) => {
    return !isNaN(Date.parse(date));
  };
  
  // Fonction pour formater une date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  
  // Export des fonctions
  module.exports = {
    isValidDate,
    formatDate,
  };