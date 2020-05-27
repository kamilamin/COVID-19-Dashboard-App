import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CardGrids from '../CardGrids/CardGrids';

const Cards = ({data: {confirmed, deaths, recovered, lastUpdate}}) => {
    if(!confirmed) {
        return "Loading...";
    }
    return(
        <div className={styles.container}>
            <Grid container justify="center" spacing={3}>
                <CardGrids Title="Confirmed" Count={confirmed.value} date={lastUpdate} subTitle="Number of active cases of COVID-19" />
                <CardGrids Title="Recovered" Count={recovered.value} date={lastUpdate} subTitle="Number of recoveries from COVID-19" />
                <CardGrids Title="Deaths" Count={deaths.value} date={lastUpdate} subTitle="Number of death cases by COVID-19" />
            </Grid>
        </div>
    )
}

export default Cards;
