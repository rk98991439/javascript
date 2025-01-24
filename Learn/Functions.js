function addTwoNumbers(num1, num2) {
    const sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
  }
addTwoNumbers(5, 1);

function run(word, num0){
    console.log('this the word '+ word +' and the number is '+ num0)
}
run('five', 5);

const dynamicObj = {};
dynamicObj.name = 'Bob';
dynamicObj.age = 30;
dynamicObj.sayHi = function () {
console.log("running")
};

console.log(dynamicObj.sayHi()); 

