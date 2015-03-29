var personalBudgetStats = require('./personalBudgetStats.js');

// console.log("Sections:" + personalBudgetStats.returnSections());

// console.log("Adding 3 new sections...");
// personalBudgetStats.addSection("Cigarete", "3000");
// personalBudgetStats.addSection("Izlasci", "4000");
// personalBudgetStats.addSection("Fiksni troskovi", "2400");

// console.log("Sections: ");
// console.log(personalBudgetStats.returnSections());

// console.log("Adding new expense...");
// console.log(
// 	personalBudgetStats.addExpense("Izlasci", "Samo Pivo",(new Date()).toString(), "500"));
// console.log("List last 5 expenses:");
// console.log(personalBudgetStats.lastFewExpenses(4));

// console.log("Sections:"); 
// console.log(personalBudgetStats.returnSections());

// // var sections = [
// // 	{
// // 		section: "Cigarete",
// // 		maxAllowed: "3000",
// // 		spentSoFar: "0"
// // 	},

// // 	{
// // 		section: "Izlasci",
// // 		maxAllowed: "4000",
// // 		spentSoFar: "0"
// // 	},

// // 	{
// // 		section: "Fiksni troskovi",
// // 		maxAllowed: "2400",
// // 		spentSoFar: "0"
// // 	}
// // ];
// var k = personalBudgetStats.initializePersonalBudgetStateFromJSON('./data.json');
// var i = personalBudgetStats.savePersonalBudgetStateToJSON('./newData.json');
troskovi = new personalBudgetStats;