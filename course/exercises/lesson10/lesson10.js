function updatestyle(button){
  let styleElement;
  if(button === '1'){
    styleElement = document.querySelector('.gaming-button1');
  } else if(button === '2'){
    styleElement = document.querySelector('.gaming-button2');
  } else{
    styleElement = document.querySelector('.gaming-button3');
  }
  if(styleElement.classList.contains('is-toggled')){
    styleElement.classList.remove('is-toggled');
  } else{
    styleElement.classList.add('is-toggled');
  }
}

function updateEveryButton(button){
   let styleElement1 = document.querySelector('.gaming-button');
   let styleElement2 = document.querySelector('.music-button');
   let styleElement3 = document.querySelector('.tech-button');
  if(button === '1'){
    styleElement1.classList.remove('is-toggled');
    styleElement2.classList.add('is-toggled');
    styleElement3.classList.add('is-toggled');
  } else if(button === '2'){
    styleElement1.classList.add('is-toggled');
    styleElement2.classList.remove('is-toggled');
    styleElement3.classList.add('is-toggled');
  } else{
    styleElement1.classList.add('is-toggled');
    styleElement2.classList.add('is-toggled');
    styleElement3.classList.remove('is-toggled');
  }
}