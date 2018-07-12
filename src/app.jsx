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
            trails: [
                {
                    "id": 7017772,
                    "name": "Potato Chip Rock",
                    "type": "Featured Hike",
                    "summary": "Potato Chip Rock is located near the peak of Mount Woodson and can be accessed by a moderate hike.",
                    "difficulty": "blueBlack",
                    "stars": 4.4,
                    "starVotes": 24,
                    "location": "Poway, California",
                    "url": "https://www.hikingproject.com/trail/7017772/potato-chip-rock",
                    "imgSqSmall": "https://cdn-files.apstatic.com/hike/7030093_sqsmall_1493151161.jpg",
                    "imgSmall": "https://cdn-files.apstatic.com/hike/7030093_small_1493151161.jpg",
                    "imgSmallMed": "https://cdn-files.apstatic.com/hike/7030093_smallMed_1493151161.jpg",
                    "imgMedium": "https://cdn-files.apstatic.com/hike/7030093_medium_1493151161.jpg",
                    "length": 7.1,
                    "ascent": 1881,
                    "descent": -1881,
                    "high": 2717,
                    "low": 946,
                    "longitude": -117.0133,
                    "latitude": 33.0064,
                    "conditionStatus": "All Clear",
                    "conditionDetails": "",
                    "conditionDate": "2018-05-29 00:00:00"
                },
                {
                    "id": 7022596,
                    "name": "Torrey Pines State Reserve Loop",
                    "type": "Featured Hike",
                    "summary": "A unique coastal route which loops through the reserve trails, down to the beach and back.",
                    "difficulty": "greenBlue",
                    "stars": 4.3,
                    "starVotes": 22,
                    "location": "Del Mar, California",
                    "url": "https://www.hikingproject.com/trail/7022596/torrey-pines-state-reserve-loop",
                    "imgSqSmall": "https://cdn-files.apstatic.com/hike/7024389_sqsmall_1477330856.jpg",
                    "imgSmall": "https://cdn-files.apstatic.com/hike/7024389_small_1477330856.jpg",
                    "imgSmallMed": "https://cdn-files.apstatic.com/hike/7024389_smallMed_1477330856.jpg",
                    "imgMedium": "https://cdn-files.apstatic.com/hike/7024389_medium_1477330856.jpg",
                    "length": 2.4,
                    "ascent": 329,
                    "descent": -330,
                    "high": 333,
                    "low": 4,
                    "longitude": -117.2592,
                    "latitude": 32.9269,
                    "conditionStatus": "All Clear",
                    "conditionDetails": "",
                    "conditionDate": "2018-06-10 05:48:17"
                },
                {
                    "id": 7049482,
                    "name": "Elfin Forest Recreation Reserve",
                    "type": "Featured Hike",
                    "summary": "A beautiful uncrowned run that is close to town",
                    "difficulty": "blue",
                    "stars": 5,
                    "starVotes": 1,
                    "location": "San Marcos, California",
                    "url": "https://www.hikingproject.com/trail/7049482/elfin-forest-recreation-reserve",
                    "imgSqSmall": "https://cdn-files.apstatic.com/hike/7046527_sqsmall_1524005628.jpg",
                    "imgSmall": "https://cdn-files.apstatic.com/hike/7046527_small_1524005628.jpg",
                    "imgSmallMed": "https://cdn-files.apstatic.com/hike/7046527_smallMed_1524005628.jpg",
                    "imgMedium": "https://cdn-files.apstatic.com/hike/7046527_medium_1524005628.jpg",
                    "length": 7.9,
                    "ascent": 1443,
                    "descent": -1442,
                    "high": 1319,
                    "low": 500,
                    "longitude": -117.1452,
                    "latitude": 33.0865,
                    "conditionStatus": "Unknown",
                    "conditionDetails": null,
                    "conditionDate": "1970-01-01 00:00:00"
                },
                {
                    "id": 7022532,
                    "name": "Three Sisters Falls",
                    "type": "Featured Hike",
                    "summary": "An iconic out-and-back route with steep, loose sections to the beautiful Three Sisters Falls.",
                    "difficulty": "blueBlack",
                    "stars": 4.2,
                    "starVotes": 13,
                    "location": "San Diego Country Estates, California",
                    "url": "https://www.hikingproject.com/trail/7022532/three-sisters-falls",
                    "imgSqSmall": "https://cdn-files.apstatic.com/hike/7024313_sqsmall_1477066039.jpg",
                    "imgSmall": "https://cdn-files.apstatic.com/hike/7024313_small_1477066039.jpg",
                    "imgSmallMed": "https://cdn-files.apstatic.com/hike/7024313_smallMed_1477066039.jpg",
                    "imgMedium": "https://cdn-files.apstatic.com/hike/7024313_medium_1477066039.jpg",
                    "length": 3.7,
                    "ascent": 1069,
                    "descent": -1070,
                    "high": 2936,
                    "low": 1970,
                    "longitude": -116.6771,
                    "latitude": 32.9846,
                    "conditionStatus": "All Clear",
                    "conditionDetails": "Dry",
                    "conditionDate": "2018-06-05 16:13:27"
                },
                {
                    "id": 7022630,
                    "name": "Razor Point Trail",
                    "type": "Featured Hike",
                    "summary": "To be written.",
                    "difficulty": "greenBlue",
                    "stars": 4.5,
                    "starVotes": 6,
                    "location": "Del Mar, California",
                    "url": "https://www.hikingproject.com/trail/7022630/razor-point-trail",
                    "imgSqSmall": "https://cdn-files.apstatic.com/hike/7024420_sqsmall_1477410808.jpg",
                    "imgSmall": "https://cdn-files.apstatic.com/hike/7024420_small_1477410808.jpg",
                    "imgSmallMed": "https://cdn-files.apstatic.com/hike/7024420_smallMed_1477410808.jpg",
                    "imgMedium": "https://cdn-files.apstatic.com/hike/7024420_medium_1477410808.jpg",
                    "length": 1,
                    "ascent": 147,
                    "descent": -147,
                    "high": 311,
                    "low": 164,
                    "longitude": -117.2537,
                    "latitude": 32.9191,
                    "conditionStatus": "Unknown",
                    "conditionDetails": null,
                    "conditionDate": "1970-01-01 00:00:00"
                },
                {
                    "id": 7022531,
                    "name": "Mission Trails Loops",
                    "type": "Featured Hike",
                    "summary": "A sampling of trails in Mission Trails Regional Park combining fire roads and singletrack.",
                    "difficulty": "blue",
                    "stars": 4.5,
                    "starVotes": 6,
                    "location": ", ",
                    "url": "https://www.hikingproject.com/trail/7022531/mission-trails-loops",
                    "imgSqSmall": "",
                    "imgSmall": "",
                    "imgSmallMed": "",
                    "imgMedium": "",
                    "length": 11.2,
                    "ascent": 1580,
                    "descent": -1576,
                    "high": 860,
                    "low": 181,
                    "longitude": -117.0596,
                    "latitude": 32.8176,
                    "conditionStatus": "All Clear",
                    "conditionDetails": "Dry",
                    "conditionDate": "2018-06-08 03:02:36"
                },
                {
                    "id": 7028365,
                    "name": "Cedar Creek Falls",
                    "type": "Featured Hike",
                    "summary": "This is San Diego’s most famous waterfall hike.",
                    "difficulty": "blueBlack",
                    "stars": 4.4,
                    "starVotes": 7,
                    "location": "San Diego Country Estates, California",
                    "url": "https://www.hikingproject.com/trail/7028365/cedar-creek-falls",
                    "imgSqSmall": "https://cdn-files.apstatic.com/hike/7029023_sqsmall_1490854552.jpg",
                    "imgSmall": "https://cdn-files.apstatic.com/hike/7029023_small_1490854552.jpg",
                    "imgSmallMed": "https://cdn-files.apstatic.com/hike/7029023_smallMed_1490854552.jpg",
                    "imgMedium": "https://cdn-files.apstatic.com/hike/7029023_medium_1490854552.jpg",
                    "length": 4.6,
                    "ascent": 1064,
                    "descent": -1064,
                    "high": 1957,
                    "low": 934,
                    "longitude": -116.7153,
                    "latitude": 33.0023,
                    "conditionStatus": "Unknown",
                    "conditionDetails": null,
                    "conditionDate": "1970-01-01 00:00:00"
                },
                {
                    "id": 7013264,
                    "name": "Blue Sky Ecological Reserve",
                    "type": "Featured Hike",
                    "summary": "This trail begins in the shade near a riverbed. At the end, it climbs to Ramona Dam.",
                    "difficulty": "greenBlue",
                    "stars": 4.4,
                    "starVotes": 8,
                    "location": "Poway, California",
                    "url": "https://www.hikingproject.com/trail/7013264/blue-sky-ecological-reserve",
                    "imgSqSmall": "https://cdn-files.apstatic.com/hike/7026707_sqsmall_1484532854.jpg",
                    "imgSmall": "https://cdn-files.apstatic.com/hike/7026707_small_1484532854.jpg",
                    "imgSmallMed": "https://cdn-files.apstatic.com/hike/7026707_smallMed_1484532854.jpg",
                    "imgMedium": "https://cdn-files.apstatic.com/hike/7026707_medium_1484532854.jpg",
                    "length": 5,
                    "ascent": 754,
                    "descent": -754,
                    "high": 1347,
                    "low": 648,
                    "longitude": -117.0237,
                    "latitude": 33.0162,
                    "conditionStatus": "Unknown",
                    "conditionDetails": null,
                    "conditionDate": "1970-01-01 00:00:00"
                },
                {
                    "id": 7012541,
                    "name": "Sunset Cliffs Park",
                    "type": "Featured Hike",
                    "summary": "Lovely walk with panoramic ocean views.",
                    "difficulty": "greenBlue",
                    "stars": 4.5,
                    "starVotes": 4,
                    "location": "San Diego, California",
                    "url": "https://www.hikingproject.com/trail/7012541/sunset-cliffs-park",
                    "imgSqSmall": "https://cdn-files.apstatic.com/hike/7009199_sqsmall_1450377311.jpg",
                    "imgSmall": "https://cdn-files.apstatic.com/hike/7009199_small_1450377311.jpg",
                    "imgSmallMed": "https://cdn-files.apstatic.com/hike/7009199_smallMed_1450377311.jpg",
                    "imgMedium": "https://cdn-files.apstatic.com/hike/7009199_medium_1450377311.jpg",
                    "length": 0.4,
                    "ascent": 186,
                    "descent": 0,
                    "high": 228,
                    "low": 42,
                    "longitude": -117.2565,
                    "latitude": 32.7151,
                    "conditionStatus": "Unknown",
                    "conditionDetails": null,
                    "conditionDate": "1970-01-01 00:00:00"
                },
                {
                    "id": 7004658,
                    "name": "Cowles Mountain Backside Loop",
                    "type": "Featured Hike",
                    "summary": "A thigh burning loop that bypasses most of the crowded sections of the traditional trail.",
                    "difficulty": "blue",
                    "stars": 3.5,
                    "starVotes": 15,
                    "location": "La Mesa, California",
                    "url": "https://www.hikingproject.com/trail/7004658/cowles-mountain-backside-loop",
                    "imgSqSmall": "https://cdn-files.apstatic.com/hike/7005487_sqsmall_1435623799.jpg",
                    "imgSmall": "https://cdn-files.apstatic.com/hike/7005487_small_1435623799.jpg",
                    "imgSmallMed": "https://cdn-files.apstatic.com/hike/7005487_smallMed_1435623799.jpg",
                    "imgMedium": "https://cdn-files.apstatic.com/hike/7005487_medium_1435623799.jpg",
                    "length": 3,
                    "ascent": 874,
                    "descent": -877,
                    "high": 1578,
                    "low": 732,
                    "longitude": -117.021,
                    "latitude": 32.8102,
                    "conditionStatus": "Unknown",
                    "conditionDetails": null,
                    "conditionDate": "1970-01-01 00:00:00"
                }
            ]
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
