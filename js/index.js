import render from './render.js'


const country = document.querySelector('.item__name')
const region = document.querySelector('.item__region')
const area = document.querySelector('.item__area')
const independent = document.querySelector('.item__independent')
let data = null


async function getCountries() {

  const requestURL = 'https://restcountries.com/v2/all?fields=name,region,area'
  const response = await fetch(requestURL)
  data = await response.json()

  render(data)
  
  if (!response.ok) {
    alert("Something went wrong. Response status: " + response.status);
  }
}

document.addEventListener('DOMContentLoaded', getCountries);

export { data }