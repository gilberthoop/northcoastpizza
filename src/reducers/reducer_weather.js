import { FETCH_WEATHER } from "../actions";

export default function(state = [], action) {
    // Error handler for non-existent or empty city
    if(action.error) {
        return state;
    }

    // Handle the fetchWeather action type
    switch(action.type) {
        case FETCH_WEATHER:
            // Add it to the existing state without mutating the state
            return state.concat([action.payload.data]);
    }

    return state;
}