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
    additionalInfo: '<img src="imagens/1.png" alt="Sol"><span style="color:#00DEFF"> 21.9 </span><a>ºC</a><span style="color:#d30000"> 26.9 </span><a>ºC</a>'
  },
  {
    text: 'Centro Fluminense',
    additionalInfo: 'Informações da previsão de tempo 2'
  },
  {
    text: 'Leste Fluminense',
    additionalInfo: 'Informações da previsão de tempo 3'
  },
  {
    text: 'Norte Fluminense',
    additionalInfo: 'Informações da previsão de tempo 4'
  },
  {
    text: 'Sul Fluminense',
    additionalInfo: 'Informações da previsão de tempo 5'
  },
  {
    text: 'Noroeste Fluminense',
    additionalInfo: 'Informações da previsão de tempo 6'
  },
	{
    text: 'Baixada Fluminense',
    additionalInfo: 'Informações da previsão de tempo 7'
  }
];
setupBox('.boxRJ1 .text', '.boxRJ2 .text', '.boxRJ1 .arrow.left', '.boxRJ1 .arrow.right', textArray1, 0);

const textArray2 = [
  {
    text: 'Brasília',
    additionalInfo: '<img src="imagens/1.png" alt="Sol"><span style="color:#00DEFF"> 24.5 </span><a>ºC</a><span style="color:#d30000"> 34.2 </span><a>ºC</a>'
  },
  {
    text: 'São Paulo',
    additionalInfo: 'Informações da previsão de tempo 2'
  },
{
    text: 'Belo Horizonte',
    additionalInfo: 'Informações da previsão de tempo 3'
  },
{
    text: 'Porto Alegre',
    additionalInfo: 'Informações da previsão de tempo 4'
  },
{
    text: 'Curitiba',
    additionalInfo: 'Informações da previsão de tempo 5'
  },
{
    text: 'Florianópolis',
    additionalInfo: 'Informações da previsão de tempo 6'
  },
{
    text: 'Goiânia',
    additionalInfo: 'Informações da previsão de tempo 7'
  },
{
    text: 'Vitória',
    additionalInfo: 'Informações da previsão de tempo 8'
  },
{
    text: 'Campo Grande',
    additionalInfo: 'Informações da previsão de tempo 9'
  }
];

setupBox('.boxOUT1 .text', '.boxOUT2 .text', '.boxOUT1 .arrow.left', '.boxOUT1 .arrow.right', textArray2, 0);