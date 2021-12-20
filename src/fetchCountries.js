export const fetchCountries = name => {
    
    const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;
    
    return fetch(url)
    .then(response => {
        return response.json()
    })
    .catch(error => {
                
                Notiflix.Notify.info('Oops, there is no country with that name');
                console.log(error);
            })
    
}



