import React, {Component} from 'react';
import Header from "./Header";
import Input from "./Input";
import ListDisplay from "./ListDisplay";

const axios = require('axios');

const hikingprojectapikey = '200306585-e6156a13c862b51872b70cfa3ac98b6a';
const gmapsapikey = 'AIzaSyATnf_bjvWvKZvK7iazfv8Q7tOVeAHxS8A';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            addressInput: '',
            rangeSliderInput: 30,
            maxResultsInput: 10,
            trails: []
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const address = this.state.addressInput.replace(new RegExp(' ', 'g'), '\+');
        const gMapsQuery = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${gmapsapikey}`;

        axios.get(gMapsQuery)
            .then(response => response.data)
            .then(responseObj => {
                const {lat, lng} = responseObj.results[0].geometry.location;
                const hikingQuery = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=${this.state.rangeSliderInput}&maxResults=${this.state.maxResultsInput}&key=${hikingprojectapikey}`;

                axios.get(hikingQuery)
                    .then(response => response.data)
                    .then(responseObj => this.setState({trails: responseObj.trails}))
                ;
            })
        ;
    }

    render() {
        return (
            <div className='container-fluid'>
                <Header/>
                <div className='row'>
                    <div className='col-xl-3 col-lg-4 col-12'>
                        <Input
                            onSubmit={this.handleSubmit}
                            onChange={this.handleChange}
                            maxRangeDisplay={this.state.rangeSliderInput}
                        />
                    </div>
                    <div className='col-xl-9 col-sm-8 col-12'>
                        <ListDisplay trails={this.state.trails}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
