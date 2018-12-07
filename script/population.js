var week = 1;
var population = 2;
console.log("week: " + week +", population: " + population);

while(population < 10000){
	week++;
	population *= 2;
	console.log("week: " + week +", population: " + population);
}