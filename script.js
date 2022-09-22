//This is a story of a garden. Good luck!
//Grow
let sun = 3
let water = 3

const plantNeedsWater = (water) =>{
    if (water <= 1){
        return true;
    } else {
        return false;
    }
}

const plantNeedsSun = (sun) =>{
    if (sun <= 1){
        return true;
    } else {
        return false;
    }
}
const veggies = ['tomato', 'pepper', 'kale'];
veggies.forEach(veggieItem =>
console.log("Your " + veggieItem + " is growing."));

 

