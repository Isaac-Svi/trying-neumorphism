//jshint esversion: 6

const contrastBtn = document.querySelector('button');
const nums = document.querySelectorAll('.row section');
const myStyle = document.querySelector('.the-style');

contrastBtn.addEventListener('click', () => {
  if (contrastBtn.innerHTML === 'Dark-Mode') {
    myStyle.href = 'dark-mode.css';
    contrastBtn.innerHTML = "Neu-Mode";
  } else {
    myStyle.href = 'neu-mode.css';
    contrastBtn.innerHTML = "Dark-Mode";
  }
});
