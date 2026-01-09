const myArray = [10, 20,30];
console.log(myArray)
console.log(myArray[1]) //index (20)

const mixed = [10, 'dean', false, {name: 'miks'}, [2, 3]];
console.log(mixed.length) //tell how many value in the array
console.log(mixed[3].name) //get the specific value

myArray.push(40) //add value to the end
console.log(myArray);

myArray.splice(1, 1); //index want to remove, how many will remove
console.log(myArray);