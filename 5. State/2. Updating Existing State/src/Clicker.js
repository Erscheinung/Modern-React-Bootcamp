import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props){
        super(props);
        this.state = {number: 1}
    }
    randomNumber = () => {
        let rand = 1+Math.floor(Math.random()*10);
        this.setState({number: rand})
    }
    
    
    render(){
        return(
            <div>
                <h1>Number is {this.state.number}</h1>
                {this.state.number === 7 
                    ? <h2>winur</h2>
                    : <button onClick={this.randomNumber}>Random Number</button>
                }
            </div>
        );
    }
}

export default Clicker;
