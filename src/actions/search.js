
export const searchInputAutocomplete = ( city, searchDispatch ) => {

    if(city.length > 3) {
        fetch(`https://api.weatherapi.com/v1/search.json?key=60d54e3e3aaf464a9be142040210812&q=${city}`)
        .then(response => response.json())
        .then(data => {
            searchDispatch({
                type: 'SEARCH_INPUT_AUTOCOMPLETE',
                payload: data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
    

}