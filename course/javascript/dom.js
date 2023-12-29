console.log(document.querySelector('button').innerHTML);
      document.querySelector('button')
        .innerHTML = 'changed';

      const buttonElement = document.querySelector('.js-button');
      console.log(buttonElement);

      /*
      document.body.innerHTML = 'hello';
      document.title = 'good job!';
      
     console.log(document.title);
     document.title = 'dom is hot';
     console.log(typeof document.body);

     console.log(document.body.innerHTML);
     document.body.innerHTML = '<button>good job!<button>';
      */