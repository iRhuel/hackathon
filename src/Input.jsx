import React, {Component} from 'react';

class Input extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card-header'>Enter Search Info Here</div>
                <form onSubmit={this.props.onSubmit}>
                    <div className='card-body'>
                        <div className='form-group'>
                            <label>Address</label>
                            <input
                                className='form-control'
                                type='text'
                                name='addressInput'
                                onChange={this.props.onChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Range (miles) - {this.props.maxRangeDisplay}mi</label>
                            <input
                                className='form-control'
                                type='range'
                                name='rangeSliderInput'
                                onChange={this.props.onChange}
                                min='10'
                                max='200'
                                step='10'
                            />
                        </div>
                        <div className='form-group'>
                            <label>Max Results</label>
                            <input
                                className='form-control'
                                type='number'
                                name='maxResultsInput'
                                onChange={this.props.onChange}
                                placeholder='Max 500'
                            />
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-primary form-control' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Input;
