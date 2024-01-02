// const myArray = [10, 20, 30];
// console.log(myArray);

// console.log(myArray[0]);
// myArray[0] = 99;
// console.log(myArray);
// const array1 = [1, 'hello', true, {name: 'socks'}, [1,2]];
// console.log(typeof array1);
// console.log(Array.isArray(array1));
// console.log(array1.length);
// array1.push(100);
// console.log(array1);

// array1.splice(3, 2);
// console.log(array1);

// let i = 1;
// while (i <= 5){
//   console.log(i);
//   i++;
// }
// for(let i = 1; i <= 5; i++){
//   console.log(i);
// }
// let randomNumeber = 0;

// while (randomNumeber < 0.5){
//   randomNumeber = Math.random();
//   console.log(randomNumeber);
// }

// const todoList = [
//   'make dinner',
//   'wash dishes',
//   'watch youtube'
// ];

// for(let i = 0 ; i < todoList.length; i++ ){
//   console.log(todoList[i]);
// }

// const nums = [1, 1, 3];
// let total = 0;
// for(let i = 0; i < nums.length; i++){
//   total += nums[i];
// }
// console.log(total);

// const numsDoubled = [];
// for(let i = 0; i < nums.length; i++){
//   numsDoubled.push(nums[i] * 2);
// }
// console.log(numsDoubled);

let array1 = [1,2,3];
let array2 = array1.slice();

array2.push(4);
console.log(array1);
console.log(array2);

const array3 = [1,2,3];
const [a, b , c] = array3;
console.log();


for(let i = 1; i <= 10; i++){
  console.log(i);
  if(i === 8)
  break;
}

for(let i = 1; i <= 10; i++){
  if(i % 3 === 0){
    continue;
  }
  console.log(i);
}

