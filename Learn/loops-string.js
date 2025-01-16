// Loops and String

// Different Kinds of Loops
// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true
let x = 2;

for (let i = 0; i < x; i++) {
    console.log (i) ;
  }


  
  const fruits = ['Apple', 'Banana', 'Orange'];
for (x in fruits) {
  console.log(x +" "+fruits[x]+"\n");
}

let i = 0;
while (i < 10) {
    console.log("The number is " + i);
    i++;
  }