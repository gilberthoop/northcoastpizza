import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  // Render UI components
  render() {
    return (
      <div>
        <h1>Northcoast Pizza's Weather Finder</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
