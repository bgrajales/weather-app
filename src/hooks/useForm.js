import { useContext, useState } from "react"
import { searchInputAutocomplete } from "../actions/search";
import { SearchContext } from "../App";

export const useForm = ( initialState = {} ) => {
    
    const { searchDispatch } = useContext(SearchContext)

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

        searchInputAutocomplete(values.city, searchDispatch)
    }


    return [ values, handleInputChange, reset ];

}