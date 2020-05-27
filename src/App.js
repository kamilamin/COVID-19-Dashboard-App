/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {
  
  state = {
    data: {},
    country: ""
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    })
  }

  handleCountryPicker = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country})
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img
          src="https://media.giphy.com/media/SxKiUZFgroqSk3evB7/giphy.gif"
          alt="COVID-19"
          className={styles.image}
        />
        <h2 className={styles.mainHeading}>COVID-19 DASHBOARD APP</h2>
        <Cards data={data} />
        <CountryPicker handleCountryPicker={this.handleCountryPicker} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;
