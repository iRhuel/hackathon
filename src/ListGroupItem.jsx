import React, {Component} from 'react';

class ListGroupItem extends Component {
    render() {

        return (
            <div className='card trail-display'>
                <div className='card-header'>
                    <h4>{this.props.name}</h4>
                </div>
                <div className='card-body list-item-content'>
                    <a href={this.props.imgMedium}>
                        <img className='thumb' src={this.props.imgSqSmall}/>
                    </a>
                    <p className=''>{this.props.summary}</p>
                    <a className='btn btn-primary' href={this.props.url}>Info</a>
                </div>
            </div>
        );
    }
}

export default ListGroupItem;