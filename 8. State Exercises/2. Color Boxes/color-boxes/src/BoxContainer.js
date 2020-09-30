import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
    static defaultProps = {
        nBoxes: 18,
        allColors: ["purple",
                    "magenta",
                    "lilac",
                    "pink"
                    ]
    };
    render(){
        const boxes = Array.from({length: this.props.nBoxes}).map(()=>(
            <Box colors={this.props.allColors}/>
        ));
        return <div className="BoxContainer">{boxes}</div>
    }    
}

export default BoxContainer;