var costOfCar = 7000;
var weeklySalary = 600;
var savingsBalance = 1000;
var week = 1;
while(savingsBalance < costOfCar){
	savingsBalance += weeklySalary*0.2;	
	console.log("My savings is " + savingsBalance +  "for week " + week);	
	week++;
}
console.log("My savings is " + savingsBalance);