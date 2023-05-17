const button = document.querySelector('button');
// console.log(button);
const onButtonClick = () => {
  button.textContent = 'You clicked on button';
  button.classList.add('success-button');
  document.querySelector('body').classList.add('center-positioner');
  setTimeout(() => {
    button.textContent = 'Click me';
  }, 3000);
};
button.addEventListener('click', onButtonClick);
