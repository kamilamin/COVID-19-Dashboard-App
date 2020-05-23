import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { countries } from '../../api';

const CountryPicker = () => {
    const [ countriesName, setCountriesName ] = useState([]);

    useEffect(() => {
        const countriesName = async () => {
            setCountriesName(await countries);
        }
        countriesName();
    }, [setCountriesName]);
    return(
        <FormControl>
            <NativeSelect>
                <option value="global">GLOBAL</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
