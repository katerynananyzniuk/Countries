import { data } from './index.js';

const allBtn = document.querySelector('.header__btn_all');
const smallerBtn = document.querySelector('.header__btn_smaller');
const oceaniaBtn = document.querySelector('.header__btn_oceania');
const sortBtn = document.querySelector('.header__btn_sort');
let sortType = 'allCountries';
let list;

const toHTML = item => `
  <li class="list__item">
  <p class="item__title">
    <span class="item__name">${item.name}</span>
  </p>
  <p class="item__title"> Located in 
    <span class="item__region">${item.region}</span></p>
  <p class="item__text">Its area is 
    <span class="item__area">${item.area}</span>
    <span class="item__area_units"> km²</span>
  </p>
</li>
`;
export default function render(arr = []) {
  const html = arr.map(item => toHTML(item)).join('');
  document.querySelector('#countries').innerHTML = html;
}

function createList(data, sortType) {
  console.log(sortType);
  switch (sortType) {
    case 'allCountries':
      return Object.assign([], data);
      break;
    case 'smallerThanLithuania':
      return Object.assign([], data).filter(item => item.area < 65300);
      break;
    case 'oceania':
      return Object.assign([], data).filter(item => item.region === 'Oceania');
      break;
  }
}

function btnHandler(sortType) {
  list = createList(data, sortType);
  render(list);
  return list;
}

allBtn.addEventListener('click', () => {
  sortType = 'allCountries';
  return btnHandler(sortType);
});

smallerBtn.addEventListener('click', () => {
  sortType = 'smallerThanLithuania';
  return btnHandler(sortType);
});

oceaniaBtn.addEventListener('click', () => {
  sortType = 'oceania';
  return btnHandler(sortType);
});

sortBtn.addEventListener('click', () => {
  list ? list : list = createList(data, sortType);
  list = alphabeticalSort(list);
  render(list);
});

function alphabeticalSort(arr) {
  return Object.assign([], arr).reverse();
}