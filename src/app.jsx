import React, {Component} from 'react';
import Header from "./Header";
import Input from "./Input";
import ListDisplay from "./ListDisplay";

const hikingprojectapikey = '200306585-e6156a13c862b51872b70cfa3ac98b6a';
const gmapsapikey = 'AIzaSyATnf_bjvWvKZvK7iazfv8Q7tOVeAHxS8A';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className='container'>
                <Header/>
                <Input/>
                <ListDisplay/>
            </div>
        );
    }
}

export default App;
