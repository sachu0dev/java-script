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


[
  'make diner',
  'wash dishes',
  'watch youtube'
].forEach(function(value, index){
  console.log(index);
  console.log(value);
});