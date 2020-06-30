import React from 'react';
import {NativeSelect,FormControl} from '@material-ui/core'
//import css

export default function CountryPicker(props){
    const countries = props.data; 
    const pickCountry = props.handleCountryChange;
    return(
        <div className="choose-form">
            <FormControl>
                Pick a Country
                <NativeSelect  defaultValue="global" onChange = {(e)=>pickCountry(e.target.value) }>
                    <option value="" >Global</option>
                    {  
                    countries.map((country,i)=>
                        {return(
                        <option key={i} value={country.Country}>{country.Country}</option>
                        )
                    })}
                </NativeSelect>
            </FormControl>
        </div>
    )
}