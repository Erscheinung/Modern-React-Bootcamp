import React, { Component } from 'react';
import './Story.css';

class Story extends Component {
    static defaultProps = {
        story: [
          {id: 1, line: "You have just opened a website", choice1: "leave", choice2: "stay"}
    
        ]
    }

    render() {
        return(
            <div className="Story">
                story = {this.story.id}
            </div>
        );
    }
}

export default Story;
