var groceryList = ["eggs", "milk", "yogurt"];

//groceryList[groceryList.length] = "chicken";
//groceryList[groceryList.length] = "rice";
groceryList.unshift("chicken", "rice");

//groceryList.pop();
//groceryList.splice(groceryList.length-2);

console.log(groceryList.length);

/*var index = 0;
while(index < groceryList.length){
	console.log(groceryList[index]);
	index++;
}*/

for(var index=0; index < groceryList.length; index++){
	console.log(groceryList[index]);
}

