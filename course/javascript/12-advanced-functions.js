// // function greeting(){
// //   console.log('string');
// // }
// // greeting();
// // // funtion is type of value
// // const num = 2;
// // const function1 = function(){
// //   console.log('hello2')
// // };

// // console.log(function1);
// // console.log(typeof function1);
// // function1();

// // const object1 = {
// //   num: 2,
// //   fun: function (){
// //     console.log('hello3')
// //   }
// // };
// // object1.fun();

// // function display(param){
// //   console.log(param);
// // }

// // display(2);

// // function run(param){
// //   param();
// // }

// // run(function(){
// //   console.log('hello 4');
// // })


// // to make a funtion after given time
// setTimeout(function(){
//   console.log('timeout')
//   console.log('timeout 2')
// }, 3000);
// // this asynchronus code the next line will display first
// console.log('next line');


// setInterval(function(){
//   console.log('intervel');
// }, 3000);

// console.log(('next line 2'))


// [
//   'make diner',
//   'wash dishes',
//   'watch youtube'
// ].forEach((value, index) => {
//   console.log(index);
//   console.log(value);
// });

// const regularFunction = function (param, pram2) {
//   console.log('hello')
// }

// const arrowFunction = (param, pram2) => {
//   console.log('hello!');
// };

// arrowFunction();


// const oneParam = pram => {
//   console.log(pram + 1);
// };
// oneParam(2);
// // one line arow function
// const oneLine = () =>  2 +3;
// console.log(oneLine());


// const object2 = {
//   method(){

//   }
// };

const buttonElement =  document.querySelector('.js-button');

const eventListener = () => {
  console.log('click');
}

buttonElement.addEventListener('click', eventListener);

buttonElement.removeEventListener('click', eventListener);

buttonElement.addEventListener('click', () => {
  console.log('click2');
});


console.log([1, -3, 5].filter((value, index) =>{
  return value >= 0;
}));


console.log([1, 1, 3].map((value, index) => {
  return value * 2;
}));

console.log([1, 1, 3].map(value => value * 2 ));

//closure