import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author: 'zp'
        }
    }

    render(){
        return (
            <div>
                <h5>这是Story</h5>
                <h2>{this.props.match.params.author}</h2>
                {/* <h1>{this.state.author}</h1> */}
            </div>
        );
    }
}
export default Home;