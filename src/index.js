import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, errorMessage: ''};

    componenetDidMount () {
        window.navigator.geolocation.getCurrentPosition(
            
        )
    }
}