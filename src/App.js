import React from 'react';

//(import one file)for here we use a trick jo bar bar hamy in components ko call nahi karna pary ga 
import { Cards, Charts, CountryPicker } from './Components';
import styles from './App.module.css';
import { fetchData } from './api';

import cronaImage from './images/image.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fatchedData = await fetchData();

        this.setState({ data: fatchedData });
    }
    handleCountryChange = async (country) => {
        const fatchedData = await fetchData(country);

        this.setState({ data: fatchedData, country: country });
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container} >

                <img className={styles.image} src={cronaImage} alt="COVID-19"/>
                <br />
                <br />
                <Cards data={data} />
                <br />
                <br />

                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country}/>

            </div>
        );
    }
}

export default App;