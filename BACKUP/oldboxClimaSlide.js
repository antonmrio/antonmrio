/* eslint-env es6 */

const text1 = document.querySelector('.box1 .text');
const text2 = document.querySelector('.box2 .text');

const leftArrow = document.querySelector('.box1 .arrow.left');
const rightArrow = document.querySelector('.box1 .arrow.right');

let currentIndex = 0;

const textArray = [
  {
    text: 'Rio de Janeiro (Capital)',
    additionalInfo: 'Informações adicionais sobre Texto 1'
  },
  {
    text: 'Centro Fluminense',
    additionalInfo: 'Informações adicionais sobre Texto 2'
  },
  {
    text: 'Leste Fluminense',
    additionalInfo: 'Informações adicionais sobre Texto 3'
  },
  {
    text: 'Norte Fluminense',
    additionalInfo: 'Informações adicionais sobre Texto 4'
  },
  {
    text: 'Sul Fluminense',
    additionalInfo: 'Informações adicionais sobre Texto 5'
  },
  {
    text: 'Noroeste Fluminense',
    additionalInfo: 'Informações adicionais sobre Texto 6'
  },
	{
    text: 'Baixada Fluminense',
    additionalInfo: 'Informações adicionais sobre Texto 7'
  }
];

text1.textContent = textArray[currentIndex].text;
text2.textContent = textArray[currentIndex].additionalInfo;

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + textArray.length) % textArray.length;
  text1.textContent = textArray[currentIndex].text;
  text2.textContent = textArray[currentIndex].additionalInfo;
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % textArray.length;
  text1.textContent = textArray[currentIndex].text;
  text2.textContent = textArray[currentIndex].additionalInfo;
});
