import React, { useContext, useEffect, useState } from 'react'
import { SearchContext, WeatherContext } from '../../App'
import { useForm } from '../../hooks/useForm'
import { InfoGrid } from '../uiElements/InfoGrid'
import { getCityWeather } from '../../actions/weather'

export const HomeScreen = () => {

    const [ formValues, handleInputChange ] = useForm({
        city: '',
    })
    
    const { searchState } = useContext(SearchContext)
    const { dispatch } = useContext(WeatherContext)

    const [ citySearch, setCitySearch ] = useState('')

    const handleCitySubmit = (e) => {
        e.preventDefault()
        setCitySearch(formValues.city)
    }

    let coords

    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        coords = latitude + ' ' + longitude
    })

    useEffect(() => {
        if (coords) {
            getCityWeather(coords, dispatch)
        }
    }, [coords, dispatch])

    return (
        <>
            <div className="app__ball1"></div>
            <div className="app__ball2"></div>
            <div className="app__ball3"></div>
            <div className="app__ball4"></div>
            <header>
                <h1 className="app__title">Weather App</h1>

                <form onSubmit={ handleCitySubmit }>
                    <input type="text" placeholder="City" list="autocomplete" name="city" value={ formValues.city } onChange={ handleInputChange } autoComplete="false"/>
                    <datalist id="autocomplete">
                        {
                            searchState.searchMatch &&
                            searchState.searchMatch.map(match =>  <option key={ match.id } value={ match.name } >{ match.name }</option>)
                        }
                    </datalist>
                    <button type="submit">Search</button>
                </form>
            </header>

            <InfoGrid city={ citySearch } />

        </>
    )
}
