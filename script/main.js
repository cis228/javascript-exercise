/*
var userName = prompt("Enter your Name");
console.log(userName);
console.log(userName === null);
console.log(userName === "" );
console.log(userName === null  || userName === "");

if(userName === null  || userName === "") {
	console.log("Hello user");
}else {
	console.log("Hello " + userName);
}
*/

var loop = 0;
var product = 1;
while(loop < 3){
	loop += 1;
	product = 1 * loop;
	console.log(product);
}