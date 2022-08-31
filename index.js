import { advices } from './data.js';

const adviceElement = document.querySelector('.advice span');
const headingElement = document.querySelector('.heading');
const buttonElement = document.querySelector('.btn-container');
let prevIndex = 0;

const randomAdvice = () => {
  const randomIndex = Math.floor(Math.random() * advices.length);
  return [advices[randomIndex], randomIndex];
};

const getAdvice = () => {
  let [advice, indx] = randomAdvice();
  while (prevIndex === indx) {
    [advice, indx] = randomAdvice();
  }
  headingElement.textContent = `Advice #${indx + 1}`;
  adviceElement.textContent = advice;
  prevIndex = indx;
};

getAdvice();

buttonElement.addEventListener('click', () => {
  setTimeout(getAdvice(), 500);
});
