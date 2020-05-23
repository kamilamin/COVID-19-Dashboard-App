/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {
  state = {
    data: {}
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    })
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <img
          src="https://media.giphy.com/media/SxKiUZFgroqSk3evB7/giphy.gif"
          style={{ width: "10%", height: "10%" }}
        />
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;
