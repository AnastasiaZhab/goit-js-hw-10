import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
console.log(fetchCountries);

// const DEBOUNCE_DELAY = 300;
const refs = {
    inputEl: document.querySelector('#search-box'),
    countryListEl: document.querySelector('.country-list'),
    countryInfoEl: document.querySelector('.country-info'),
}
refs.inputEl.addEventListener('input', onInput);

function onInput() {
    
    let search = refs.inputEl.value;
    console.log(search);

    fetchCountries(search);


}












// fetch('https://restcountries.com/v3.1/name/ukraine?fields=name,capital,population,flags,languages')
//     .then(response => {
//         return response.json()
//     })
//     .then(console.log);