const nums = [10,20,30];
nums[2] = 99;
console.log(nums);
console.log(getLastValue([10,20,30]));
function getLastValue(array){
  const lastIndex = array.length - 1;
  const LastValue = array[lastIndex];
  return LastValue;
}

let array1 = [1, 20, 22, 24, 5];
console.log(arraySwap(array1));

function arraySwap(array){
  const lastIndex = array.length - 1;
  const LastValue = array[lastIndex];
  const firstValue = array[0];
  array[0] = LastValue;
  array[lastIndex] = firstValue;
  return array;
}

for(let i = 0; i <= 10; i+=2){
  console.log(i);
}
for(let i = 5; i >= 0; i--){
  console.log(i);
}

const incrementArray = [0 , 1, 2, 3, 4];
console.log(incrementArray);
const newArray = [];
for(let i = 0; i < incrementArray.length; i++){
  newArray[i] = incrementArray[i] + 1;
}
console.log(newArray);

function addOne(array,num){
  for(let i = 0; i < array.length; i++){
    array[i] = array[i] + num;
  }
  return array;
}
console.log(addOne(incrementArray,3));

const nums1 = [1,2,3];
const nums2 = [1,2,3];
console.log(addArrays(nums1,nums2));
function addArrays(array1,array2){
  const addedArray = [];
  for(let i = 0; i < array1.length; i++){
    addedArray[i] = array1[i] + array2[i];
  }
  return addedArray;
}

signedArray = [ -1 , 2 , 3 , 4, 5];
console.log(countPositive(signedArray));

function countPositive(array){
  let count = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] >= 0){
      count++;
    }
  }
  return count;
}

const loopArray = [1 , -3, 5];

function minMax(array){
  let obj = {
    min: 0,
    max: 0
  }
  for(let i = )
}