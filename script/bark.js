/*function bark(dogName, dogWeight){
    if(dogWeight > 20){
        console.log(dogName + " says WOOF WOOF");
    }else {
        console.log(dogName + " says woof woof");
    }
}
bark("Rover", 23);
bark("Spot", 13);
bark();*/


function dogSay(dogName, dogWeight){
    if(dogWeight > 20){
        return (dogName + " says WOOF WOOF");
    }else {
        return (dogName + " says woof woof");
    }
}
var output = dogSay("Rover", 23);
console.log(output);
