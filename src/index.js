/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-syntax */
import './index.css';
import 'mini.css/dist/mini-default.min.css';

const formBlock = document.querySelector('.form');
const inputNumberBlock = document.querySelector('.input-number');
const resultBlock = document.querySelector('.result');
formBlock.addEventListener('submit', (event) => {
  event.preventDefault();
  const number = inputNumberBlock.value;
  const promises = [];
  for (let i = 0; i < number; i += 1) {
    const numberPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 10));
      }, 2000);
    });
    promises.push(numberPromise);
  }

  Promise.all(promises)
    .then((datas) => {
      const maxNumber = Math.max(...datas);
      const minNumber = Math.min(...datas);
      let sum = 0;
      for (const data of datas) {
        sum += data;
      }
      const arithmeticMeanNumber = Math.round(sum / datas.length);
      resultBlock.textContent = `Максимальное число: ${maxNumber};
                    Минимальное  число: ${minNumber};
                    Cреднее арифметическое: ${arithmeticMeanNumber}`;
      inputNumberBlock.value = '';
    });
});
