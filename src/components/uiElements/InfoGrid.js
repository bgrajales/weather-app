import React, { useContext, useEffect } from 'react'
import { getCityWeather } from '../../actions/weather'
import { WeatherContext } from '../../App'

export const InfoGrid = ({ city }) => {

    const { state, dispatch } = useContext(WeatherContext)

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const avrevDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const hours = []
    const d = new Date();

    let hour = d.getHours();

    for (let index = 0; index < 4; index++) {
        hours.push(hour + index)
    }

    useEffect(() => {
        if (city !== '') {
            getCityWeather(city, dispatch)
        }
    }, [city, dispatch])

    return (
        <>
            {
                state.weather
                ? <div className="parent">
                <div className="div1">
                    <h1>{state.weather.location.region}</h1>
                    <h4>{state.weather.location.name}</h4>
                    <img src={state.weather.current.condition.icon} alt="weather icon" />
                    <span>{state.weather.current.condition.text}</span>
                    <p>{Math.round(state.weather.current.temp_c)}°</p>
                </div>
                <div className="div2">
                    <div className="infoGrid__todayHeader">
                        <h1>Today</h1>
                        <h1>{days[d.getDay()]} {d.getDate()} - {d.getHours()}hs</h1>
                    </div>
                    <div className="infoGrid__hoursForecast">
                        <div>
                            <h3>{hours[0]}h</h3>
                            <img src={state.weather.forecast.forecastday[0].hour[hours[0]].condition.icon} alt="weather icon" />
                            <p>{Math.round(state.weather.forecast.forecastday[0].hour[hours[0]].temp_c)}°</p>
                        </div>
                        <div>
                            <h3>{hours[1]}h</h3>
                            <img src={state.weather.forecast.forecastday[0].hour[hours[1]].condition.icon} alt="weather icon" />
                            <p>{Math.round(state.weather.forecast.forecastday[0].hour[hours[1]].temp_c)}°</p>
                        </div>
                        <div>
                            <h3>{hours[2]}h</h3>
                            <img src={state.weather.forecast.forecastday[0].hour[hours[2]].condition.icon} alt="weather icon" />
                            <p>{Math.round(state.weather.forecast.forecastday[0].hour[hours[2]].temp_c)}°</p>
                        </div>
                        <div>
                            <h3>{hours[3]}h</h3>
                            <img src={state.weather.forecast.forecastday[0].hour[hours[3]].condition.icon} alt="weather icon" />
                            <p>{Math.round(state.weather.forecast.forecastday[0].hour[hours[3]].temp_c)}°</p>
                        </div>
                    </div>
                </div>
                <div className="div3">
                    <div>
                        <h1>
                            {`${avrevDays[d.getDay()]} `}
                            {new Date(state.weather.forecast.forecastday[0].date).getUTCDate()}
                        </h1>
                        <img src={state.weather.forecast.forecastday[0].day.condition.icon} alt="weather icon" />
                        <p>{Math.round(state.weather.forecast.forecastday[0].day.avgtemp_c)}°</p>
                    </div>
                    <div>
                        <h1>
                            {`${avrevDays[d.getDay() + 1]} `}
                            {new Date(state.weather.forecast.forecastday[1].date).getUTCDate()}
                        </h1>
                        <img src={state.weather.forecast.forecastday[1].day.condition.icon} alt="weather icon" />
                        <p>{Math.round(state.weather.forecast.forecastday[1].day.avgtemp_c)}°</p>
                    </div>
                    <div>
                        <h1>
                            {`${avrevDays[d.getDay() + 2]} `}
                            {new Date(state.weather.forecast.forecastday[2].date).getUTCDate()}
                        </h1>
                        <img src={state.weather.forecast.forecastday[2].day.condition.icon} alt="weather icon" />
                        <p>{Math.round(state.weather.forecast.forecastday[2].day.avgtemp_c)}°</p>
                    </div>
                    {/* <div>
                        <h1>{state.weather.forecast.forecastday[3].date}</h1>
                        <AiFillCloud />
                        <p>17°</p>
                    </div>
                    <div>
                        <h1>{state.weather.forecast.forecastday[4].date}</h1>
                        <AiFillCloud />
                        <p>17°</p>
                    </div>
                    <div>
                        <h1>{state.weather.forecast.forecastday[5].date}</h1>
                        <AiFillCloud />
                        <p>17°</p>
                    </div>
                    <div>
                        <h1>{state.weather.forecast.forecastday[6].date}</h1>
                        <AiFillCloud />
                        <p>17°</p>
                    </div> */}
                </div>
            </div>
            : <div>
                <h1>Loading...</h1>
              </div>
            }
        </>
    )
}
