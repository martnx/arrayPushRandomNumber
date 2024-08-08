let numbers = [];
let randomNumber;
let lengthArray = 10; //Change this if you want to adjust the size of array
let betweenRandom = 1000;

//To push random number
let quantityNumber //To push
for(let i = 0; i < lengthArray; i++){
    randomNumber = Math.floor(Math.random() * betweenRandom);
    numbers.push(randomNumber);
}
console.log(numbers);

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(`Minumum is ${minimum}`);
console.log(`Maximum is ${maximum}`);