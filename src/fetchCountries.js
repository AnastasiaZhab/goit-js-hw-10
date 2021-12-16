export const fetchCountries = name => {
    // name.preventDefault();

    
    const url = 'https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages';
    console.log(url);
    
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(console.log)
    
}






// const searchQuery = name.currentTarget.elements.query.value;
// https://restcountries.com/v2/all?fields=name,capital,currencies