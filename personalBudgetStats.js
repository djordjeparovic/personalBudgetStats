var fs = require('fs');

var personalBudgetStats = {
	/* sections is array of objects 
	{section:"", maxAllowed:"", spentSoFar:""} */
	sections: [],
	/* expenses is array of objects 
	{section:"", name:"", date:"", spent:""}	*/
	expenses: [],
	creationDate: this.creationDate || (new Date()).toString(),

	/**
	*	Adds new expense to list of expenses. Updates <spentSoFar> 
	*	value in <sections> array. 
	*	@param {String} section - The section in which function should
	*	store new expense
	*	@param {String} name - The name of expense
	*	@param {String} spent - The amount of money spent on <name> in 
	*	<section> section.
	*	@return {Boolean} - Successfully updated <expenses> and <sections>. 
	*/
	addExpense: function(section, name, date, spent){
		this.expenses.push(
			{
				section: section,
				name: name,
				date: date,
				spent: spent
			});
		/* update spentSoFar in sections */
		var found = false;
		for (var i=0; i < this.sections.length; i++){
			if (this.sections[i].section == section){
				found = true;
				newValue = parseInt(this.sections[i].spentSoFar)+
					parseInt(spent);
				this.sections[i].spentSoFar = newValue.toString();
			};
		};
		return found;
	},

	/**
	*	Return the last <value> expenses
	*	@param { String } value - number of required expenses
	*	@return { Array }
	*/
	lastFewExpenses: function(value){
		if (value > this.expenses.length) {
			return this.expenses;
		} else {
			/* TODO */
		}
	},

	/**
	*	Returns array of available sections
	*	@return { Array } 
	*/
	returnSections: function(){
		return this.sections;
	},

	/**
	*	Adds new section to <sections> array
	*	@param { String } section - section name
 	*	@param { String } maxAllowed - max allowed amout of money
	*	planned to spent in current section
	*	@return { Boolean } - Successfully added new section
	*/
	addSection: function(section, maxAllowed){
		/*TODO if incompatible types return false */
		this.sections.push(
			{
				section: section, 
				maxAllowed: maxAllowed, 
				spentSoFar: "0"
			});
		return true;
	},

	/**
	*	Initialize <sections> and <expenses> arrays form 
	*	passed <json> object
	*	@param { JSON } json 
	*	@return { Boolean } - Successfully initialized state 
	*	of personalBudget
	*/
	initializePersonalBudgetStateFromJSON: function(jsonFile){
		try {
			data = require(jsonFile);
			this.sections = data.sections;
			this.expenses = data.expenses;
		} catch(e) {
			return false;
		}
		return true;
	},

	/**
	*	Saves current state of personalBudgetStats object  
	*	to <jsonData> JSON file
	*	@param { String } jsonFile - path to file (ex. './data.json') 
	*	@return { Boolean } - Successfully saved state
	*/
	savePersonalBudgetStateToJSON: function(jsonFile){
		var obj = {sections: this.sections,
				   expenses: this.expenses };
		var str = JSON.stringify(obj);
		fs.writeFile(jsonFile, str, function(err){
			if(err){
				return false;
			}	
			return true;
		});
	}

};

module.exports = personalBudgetStats;