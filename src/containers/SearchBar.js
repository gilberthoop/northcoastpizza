import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    // Create a constructor
    constructor(props) {
        super(props);

        // Initialize the component state
        this.state = { term: '' };

        // Bind the context of the functions onInputChange and onFormSubmit 
        //to the Searchbar instance
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // Create a function for updating search value
    onInputChange(event) {
        // Set the state based on the value of the input search bar
        this.setState({ term: event.target.value });
    }

    // Create an event handler function for form submit 
    onFormSubmit(event) {
        // Prevent the browser from submitting the form
        event.preventDefault();

        // Fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ' '});
    }
    
    // Create the search bar UI
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Enter a city to get the current weather."
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}  />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

// Bind the fetchWeather action creator to dispatch
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// Map fetchWeather action creator to props of SearchBar and export
export default connect(null, mapDispatchToProps)(SearchBar);