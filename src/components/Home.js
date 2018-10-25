import React from 'react';

class Story extends React.Component{
    constructor(props) {
        super(props);
        this.toStory = this.toStory.bind(this);
    }

    toStory() {
        this.props.history.push('./Story');
    }

    render(){
        return (
            <div>
                <h5>这是Home</h5>
                <a onClick={this.toStory}>跳转到Story</a>
            </div>
        );
    }
}
export default Story;