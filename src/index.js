import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import Notiflix from 'notiflix';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const refs = {
    inputEl: document.querySelector('#search-box'),
    countryListEl: document.querySelector('.country-list'),
    countryInfoEl: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
    
    let searchCountry = event.target.value;
    let valueCountry = searchCountry.trim();
    refs.countryInfoEl.innerHTML = '';
    refs.countryListEl.innerHTML = '';


    if (valueCountry !== '') {
        fetchCountries(valueCountry)
            .then(data => {
                let countryData = data;
                refs.countryListEl.innerHTML = '';
                refs.countryInfoEl.innerHTML = '';

                if (countryData.length > 10) {
                    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
                    return;
                }

                if (countryData.length >= 2 && countryData.length <= 10) {
                    const items = countryData.map(item =>
                        `<li><img src='${item.flags.svg}' height=30px />
                        <span>${item.name.official}</span>
                        </li>
                    `).join('');
                  
                    refs.countryListEl.insertAdjacentHTML('beforeend', items);
                    return;
                }

                if (countryData.length === 1) {
                    const country = countryData.map(item =>
                        `<img src='${item.flags.svg}' height=30px />
                             <span>${item.name.official}</span>
                             <p>Capital: ${item.capital}</p>
                             <p>Population: ${item.population}</p>
                             <p>Languages: ${Object.values(item.languages).join(', ')}</p>
                        `)
                    
                    refs.countryInfoEl.insertAdjacentHTML('beforeend', country);

                }
                return;
            })

            .catch(error => {
                
                Notiflix.Notify.failure('Oops, there is no country with that name');
                console.log(error);
            })
    }

}