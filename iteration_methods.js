const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);


// DIFFERENT WAYS TO PRINT ONE METHOD


//ONE
function printGrocery(element){
  console.log(element);
}
groceries.forEach(printGrocery);

//TWO
groceries.forEach(groceryItem => console.log(groceryItem));

//example 
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruits=> console.log('I want to eat a ' + fruits));



//USING ARITHMETIC IN A ITERATION METHOD

const smallNumbers = bigNumbers.map(bigNumbers => {
   return bigNumbers / 100; });




// USING.filter example code. RETURNS LENGTH OF A STRING

const longFavoriteWords =  favoriteWords.filter(favoriteWords=> {return favoriteWords.length > 7});


//ACCESSING THE FIRST LETTER OF A STRING

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
}); //RETURNS INDEX NUMBER

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});//RETURNS ANIMAL WITH FIRST LETTER S





