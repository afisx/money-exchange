// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	if (currency < 0) {
		return {};
	} else if (currency > 10000) {
		return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	} else {
		const example = {'H': 50, 'Q': 25, 'D': 10, 'N': 5, 'P': 1};
		let result = {};
		for (let item in example){
			if (currency >= example[item]){
				let res = currency % example[item];
				result[item] = (currency - res) / example[item];
				currency = res; 
			}
		}
		return result;
	}
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
