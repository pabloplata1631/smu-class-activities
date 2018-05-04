 
const myButton = document.getElementById('myButton');
const myTextinput = document.getElementById('myTextInput');


myButton.addEventListener('click', () => {
  myHeading.style.color = myTextinput.value;// myTextinput.value; makes input change color when user types in a color - WOW!!!!
});



// selecting an element that doent have en ID

const myHeading = document.getElementsByTagName('h1')[0];

const myList = document.getElementsByTagName('li');
for (let i = 0; i < myList.length; i ++){
  myList[i].style.color = 'purple';
}




