var personalBudgetStats = require('./personalBudgetStats.js');

var troskovi = new personalBudgetStats('./data.json');

console.log("Data in ./data.json:\n");
console.log(troskovi.getSections());
console.log(troskovi.getExpenses());

console.log("Adding section {Software licences, 1000}...");

troskovi.addSection("Software licences", "1000");

console.log("Printing sections...."); 
console.log(troskovi.getSections());


console.log("Save edited data into newData.json file... "); 
troskovi.savePersonalBudgetStateToJSON('./newData.json');