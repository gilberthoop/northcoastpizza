import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/GoogleMap'

class WeatherList extends Component {
    // Render a single data row of city
    renderWeather(cityData) {
        return (
            <tr key={cityData.name}>
                <td><GoogleMap lon={cityData.coord.lon} lat={cityData.coord.lat} /></td>
                <td>
                    <strong>{cityData.weather[0].main}</strong>
                    <br/> {cityData.weather[0].description}
                </td>
                <td>{cityData.main.temp}</td>
                <td>{cityData.main.pressure}</td>
                <td>{cityData.main.humidity}</td>
            </tr>
        )
    }

    // Create the weather list UI
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Condition</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);