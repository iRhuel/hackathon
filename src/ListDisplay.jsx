import React, {Component} from 'react';
import ListGroupItem from "./ListGroupItem";

class ListDisplay extends Component {
    render() {
        return (
            <ul>
                {this.props.trails.map(trail => {
                    const props = trail;
                    return (
                        <ListGroupItem {...props} key={trail.id}/>
                )})}
            </ul>
        );
    }
}

export default ListDisplay;