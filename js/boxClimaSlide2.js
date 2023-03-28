/* eslint-env es6 */

function setupBox(selector1, selector2, leftSelector, rightSelector, textArray, currentIndex) {
  const text1 = document.querySelector(selector1);
  const text2 = document.querySelector(selector2);
  const leftArrow = document.querySelector(leftSelector);
  const rightArrow = document.querySelector(rightSelector);

  text1.textContent = textArray[currentIndex].text;
  text2.innerHTML = `<pre><code>${textArray[currentIndex].additionalInfo}</code></pre>`;

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + textArray.length) % textArray.length;
    text1.textContent = textArray[currentIndex].text;
    text2.innerHTML = `<pre><code>${textArray[currentIndex].additionalInfo}</code></pre>`;
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % textArray.length;
    text1.textContent = textArray[currentIndex].text;
    text2.innerHTML = `<pre><code>${textArray[currentIndex].additionalInfo}</code></pre>`;
  });
}

const textArray1 = [
   {
    text: 'Rio de Janeiro (Capital)',
    additionalInfo: 'Informações adicionais sobre Texto 1'
  },
  {
    text: 'Centro Fluminense',
    additionalInfo: `Este é um exemplo de como incluir uma linha de HTML:
<br>
<strong>Texto em negrito</strong>
`
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
setupBox('.boxRJ1 .text', '.boxRJ2 .text', '.boxRJ1 .arrow.left', '.boxRJ1 .arrow.right', textArray1, 0);

const textArray2 = [
  {
    text: 'Brasilia',
    additionalInfo: 'Informações adicionais sobre Texto 3'
  },
  {
    text: 'São Paulo',
    additionalInfo: 'Informações adicionais sobre Texto 4'
  },
{
    text: 'Belo Horizonte',
    additionalInfo: 'Informações adicionais sobre Texto 3'
  },
{
    text: 'Porto Alegre',
    additionalInfo: 'Informações adicionais sobre Texto 3'
  },
{
    text: 'Curitiba',
    additionalInfo: 'Informações adicionais sobre Texto 3'
  },
{
    text: 'Florianópolis',
    additionalInfo: 'Informações adicionais sobre Texto 3'
  },
{
    text: 'Goiânia',
    additionalInfo: 'Informações adicionais sobre Texto 3'
  },
{
    text: 'Vitória',
    additionalInfo: 'Informações adicionais sobre Texto 3'
  },
{
    text: 'Campo Grande',
    additionalInfo: 'Informações adicionais sobre Texto 3'
  }
];

setupBox('.boxOUT1 .text', '.boxOUT2 .text', '.boxOUT1 .arrow.left', '.boxOUT1 .arrow.right', textArray2, 0);

const moreInfoBtns = document.querySelectorAll('.more-info-btn');

moreInfoBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const currentIndex = parseInt(btn.getAttribute('data-index'));
    const currentContent = textArray[currentIndex];
    window.location.href = currentContent.url;
  });
});
