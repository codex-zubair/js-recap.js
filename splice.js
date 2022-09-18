var fruitsList = ['orange', 'mango', 'banana', 'apple'];

// Removing two item from last.
fruitsList.splice(2, 2);
console.log(fruitsList);

// adding two item in the middle. removing zero items.
fruitsList.splice(1, 0, 'Another Banana', 'more banana');
console.log(fruitsList);