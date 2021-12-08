
export const getCityWeather = ( city, dispatch ) => {

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&days=7&aqi=no&alerts=no`)
    .then(res => res.json())
    .then(data => {

        dispatch({
            type: 'GET_WEATHER',
            payload: data
        })
        return data;
    })
    .catch(err => console.log(err));

}

