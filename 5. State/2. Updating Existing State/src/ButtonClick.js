import React, { Component } from 'react';

class ButtonClick extends Component {
    render() {
        return (
            <button
                onClick={function() {
                    alert('clicked');
                }}
            >
                Click me uwu
            </button>
        );
    }
}

export default ButtonClick;