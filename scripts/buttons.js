// Function: creates a new paragraph and append it to the bottom of the HTML body.

function createParagraph(e) {
    var text = e.target.textContent;
    console.log(text);
    var para = document.createElement('p');
    para.textContent = 'You clicked the button! - '+ text;
    document.body.appendChild(para);
  }
  
  /*
    1. Get references to all the buttons on the page and sort them in an array.
    2. Loop through all the buttons and add a click event listener to each one.
  
    When any button is pressed, the createParagraph() function will be run.
  */
  
  var buttons = document.querySelectorAll('button');
  
  for (var i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
    console.log(buttons[i].textContent + ' is now listening to Click event.')
  }