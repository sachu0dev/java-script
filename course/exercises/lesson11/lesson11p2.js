// const array = ['hello', 'world', 'search', 'good'];

// let index = -1;

// for(let i = 0; i < array.length; i++){
//   if (array[i] === 'search'){
//     index = i;
//     break;
//   }
// }
// console.log(index);

// function findIndex(array,word){
//   for(let i = 0; i < array.length; i++){
//     if (array[i] === word){
//       index = i;
//       break;
//     }
//   }
//   console.log(index);
// }
// findIndex(array,'world');

// let array =['egg', 'apple', 'egg', 'egg', 'ham'];
// removeEgg(array,'egg');
// // function removeEgg(array,word){
// //   let count = 0;
// //   for(let i = array.length - 1; i >= 0; i--){
// //       if (array[i] === word){
// //         array.splice(i, 1);
// //         count++;
// //       } else if(count > 1){
// //         break;
// //       }
// //     }
// //     console.log(array);
// //     console.log(count)
// // }

// function removeEgg(array,word){
//   let count = 0;
//   for(let i = array.length - 1; i >= 0; i--){
//       if ((count !== 1) && (array[i] === word)){
//         array.splice(i, 1);
//         count++;
//       }
//     }
//     console.log(array);
//     console.log(count);
// }

// const foods =  ['egg', 'apple', 'egg', 'egg', 'ham'];
// removeEgg(foods,'egg',0);

// function removeEgg(foods,word,num){
//   const updatedFoods = [];
//   let count = 0;
//   for(let i = 0; i < foods.length; i++){
//     if(word === foods[i] && count < num){
//       count++;
//       continue;
//     } else{
//       updatedFoods.push(foods[i]);
//     }
//   } 
//   console.log(updatedFoods);
// }
//   console.log(count);

// const foods =  ['egg', 'apple', 'egg', 'egg', 'ham'];
// removeEgg(foods,'egg',2);

// function removeEgg(foods,word,num){
//   const updatedFoods = [];
//   let count = 0;
//   const copyFoods = foods.slice();
//   copyFoods.reverse();
//   for(let i = 0; i < foods.length; i++){
//     if(word === copyFoods[i] && count < num){
//       count++;
//       continue;
//     } else{
//       updatedFoods.push(copyFoods[i]);
//     }
//   } 
//   console.log(updatedFoods);
//   console.log(foods);
// }

// for(let i = 1; i <= 20; i++){
//   if((i % 3 === 0) && i % 5 === 0){
//     console.log(`${i}-Fijjbujj`);
//   }
//   else if(i % 3 === 0){
//     console.log(`${i}-fijj`);
//   }
//   else if(i % 5 === 0){
//     console.log(`${i}-bujj`);
//   }
//   else{
//     console.log(`${i}-invailed no.`)
//   }
// }

const array = ['world', 'world','hello', 'world', 'search', 'world'];


console.log(unique(array));
function unique(array){
  const updatedArray = [];
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(array[i] === updatedArray[j]){
        break;
      } else if( i === j){
        updatedArray.push(array[i]);
      }
    }
  }
  return updatedArray;
}