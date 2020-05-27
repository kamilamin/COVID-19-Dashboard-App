import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({handleCountryPicker}) => {
    const [ countriesName, setCountriesName ] = useState([]);

    useEffect(() => {
        const fetchCountriesName = async () => {
            setCountriesName(await fetchCountries());
        }
        fetchCountriesName();
    });
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={e => handleCountryPicker(e.target.value)}>
                <option value="">GLOBAL</option>
                {countriesName.map((country, index) => <option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
