function fun(){
  console.log('hello');
  console.log(2+2);
}
fun();

function greet(name){
  if(!name){
    console.log('Hi there!')
  }else console.log(`Hello! ${name}`);
}

function convertTemperature(degrees , unit){
  if(unit === 'c'){
    return (`${(degrees - 32)* 5 / 9}C`);
  }
  else if(unit === 'f') return(`${(degrees*9/5)+32}C`);
}