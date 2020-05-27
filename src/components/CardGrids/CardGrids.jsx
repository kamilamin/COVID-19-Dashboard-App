import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import CountUp from 'react-countup';
import styles from './CardGrids.module.css';

const CardGrids = ({ Title, Count, date, subTitle }) => {
    return (
        <Grid item
            component={Card}
            xs={12} md={3}
            className={Title === "Confirmed" ?
                cx(styles.card, styles.confirmed) :
                Title === "Recovered" ?
                cx(styles.card, styles.recovered) : cx(styles.card, styles.deaths)}
        >
            <CardContent>
                <Typography color="textPrimary" variant="h5" gutterBottom>{Title}</Typography>
                <Typography variant="h5">
                    <CountUp start={0} end={Count} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
                <Typography variant="body2">{subTitle}</Typography>
            </CardContent>
        </Grid>
    )
}

export default CardGrids;
