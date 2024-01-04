const multipy = (num1, num2) => num1 * num2;


console.log(multipy(7,10));

function countPositive(nums){
  let positiveNums = [];
  nums.forEach(value => {
    if(value >= 0){
      positiveNums.push(value);
    }
  });
  return positiveNums;
}
console.log(countPositive([1, -3, 5]));


function addNum(array, num){
  let newarray = array.map(value => value + num);
  return newarray;
}
console.log(addNum([1,2,3],2));

const foods = ['egg', 'apple', 'egg', 'egg', 'ham']

// function removeEgg(foods){
//   let filteredFood = foods.filter(value => value !== 'egg');
//   return filteredFood;
// }
// console.log(removeEgg(foods));

function removeEgg(foods){
  let count = 0;
  let filteredFood = foods.filter(value =>{
    if (value === 'egg' && count < 2){
      count++;
      return false;
    } 
      return true;
  });
  return filteredFood;
}
console.log(removeEgg(foods));
