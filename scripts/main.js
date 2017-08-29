var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World Dome!!!'

var subtitle = document.getElementById('subtitle');
subtitle.textContent = subtitle.textContent + ' ...';


function multiply(a,b) {
    return a*b;
}

// var a = 10.5, b=3;
// alert('10.5 * 3 = '+ multiply(a,b));

document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myImg = document.querySelector('img');
myImg.onclick = function() {
    var mySrc = myImg.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImg.setAttribute('src', 'images/firefox2.png');
    } else {
        myImg.setAttribute('src', 'images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName;
}

myButton.onclick = function() {
    setUserName();
}
