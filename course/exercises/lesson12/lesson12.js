// const add = function dummy(){
//   console.log(2+3);
// }

// function runTwice(fun){
//   fun();
//   fun();
// }

// runTwice(add);



function textUpdate(){
  let buttonElement = document.querySelector('.button');
  buttonElement.textContent = 'Finished!';
}

function updateButton(){
  let buttonElement = document.querySelector('.button');
  buttonElement.textContent = 'Loading...';
  setTimeout(textUpdate, 1000);
}

let timeoutId;
function removeText(){
  let paraElement = document.querySelector('.added');
  paraElement.textContent = '';
}

function addText(){
  let paraElement = document.querySelector('.added');
  paraElement.textContent = 'Added';
  clearTimeout(timeoutId);
  timeoutId = setTimeout(removeText, 2000);
}
let messages = 2;
function updateMassage(){
  if (document.title === 'lesson12' && messages !== 0){
    document.title = `(${messages}) New messages`;
  } else {
    document.title = 'lesson12';
  }
}
setInterval(updateMassage, 1000);

