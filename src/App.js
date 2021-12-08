import { createContext, useReducer } from "react";
import { HomeScreen } from "./components/main/HomeScreen";
import { searchReducer } from "./reducers/searchReducer";
import { weatherReducer } from "./reducers/weatherReducer";

export const WeatherContext = createContext();
export const SearchContext = createContext();

export function App() {

  const [ state, dispatch ] = useReducer(weatherReducer, {})
  const [ searchState, searchDispatch ] = useReducer(searchReducer, {})

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      <SearchContext.Provider value={{ searchState, searchDispatch }}>
      <div className="App">
        <HomeScreen />
      </div>
      </SearchContext.Provider>
    </WeatherContext.Provider>
  );
}

export default App;
