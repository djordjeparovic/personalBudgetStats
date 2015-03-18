var personalBudgetStats = require('./personalBudgetStats.js');

console.log("Sections:" + personalBudgetStats.returnSections());

console.log("Adding 3 new sections...");
personalBudgetStats.addSection("Cigarete", "3000");
personalBudgetStats.addSection("Izlasci", "4000");
personalBudgetStats.addSection("Fiksni troskovi", "2400");

console.log("Sections: ");
console.log(personalBudgetStats.returnSections());

console.log("Adding new expense...");
console.log(
	personalBudgetStats.addExpense("Izlasci", "Samo Pivo", "500"));
console.log("List last 5 expenses:");
console.log(personalBudgetStats.lastFewExpenses(4));

console.log("Sections:"); 
console.log(personalBudgetStats.returnSections());

// var sections = [
// 	{
// 		section: "Cigarete",
// 		max_allowed: "3000",
// 		spentSoFar: "0"
// 	},

// 	{
// 		section: "Izlasci",
// 		max_allowed: "4000",
// 		spentSoFar: "0"
// 	},

// 	{
// 		section: "Fiksni troskovi",
// 		max_allowed: "2400",
// 		spentSoFar: "0"
// 	}
// ];
