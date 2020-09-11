import React from 'react';

import { Cards, CountryPicker } from './components';
import { fetchData, fetchCountriesCases } from './api/';
import  './App.css';

import image from './images/corona.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    const countries = await fetchCountriesCases();
    this.setState({ data, countries });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  }




  render() {
    const { data, country } = this.state;

    return (
      <div className="container">
          <img className="image" src={image} alt="COVID-19" />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />

      </div>
    );
  }
}

export default App;