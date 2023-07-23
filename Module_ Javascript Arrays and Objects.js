const sandwich = ["peanut butter", "jelly", "bread"];
const teams = [["Bulls", 23], ["White Sox", 45]];

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
console.log(array[1]);

const ourArray = [50, 40, 30];
ourArray[0] = 15;
console.log(ourArray[0]);

function functionName() {
    console.log("Hello World");
  }


  functionName();

  const lock = "fook";

  function myTest() {
    const lock = "foo";
    console.log(lock);
  }
  
  myTest();
  console.log(lock);

  function myFun() {
    console.log("Hello");
    console.log("byebye")

    return "World";
  }
  myFun();

console.log("\n")
  const ourArraya = [];

for (let i = 0; i < 10; i += 2) {
  ourArraya.push(i);
  console.log(ourArraya);

}

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

console.log("_____________________________________________________________________________________________________________________________________________________________________________\n")

const arr1 = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      console.log(arr1[i][j]);
    }
  }
  
  function tryIt(numberAsString) {

    if (parseInt(numberAsString) == 123) {
      return console.log("Yay!");
    }
  
    console.log("Boo!");
  }
  
  tryIt("123");
  