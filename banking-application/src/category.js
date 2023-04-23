var category = function category(key) {
  
  // Write the Logic here
  switch (key) {
    case 'pl':
      return "Personal Loan";
      break;
    case 'Vl':
      return "Vehicle Loan";
      break;
    case 'EL':
      return "Education Loan";
      break;
    case 'hL':
      return "Home Loan";
      break;
  
    default:
      break;
  }

  };
  
  module.exports = {
    category: category
  };