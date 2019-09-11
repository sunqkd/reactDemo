import React, {Component} from 'react';
import url from 'url';

class Projectcontent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            aid:''
        };
    }
    render() {
        return (
            <div>
                {this.state.aid}
            </div>
        );
    }

    componentDidMount(){
        console.log(url.parse(this.props.location.search,true))

        var aid = url.parse(this.props.location.search,true).query.aid;

        this.setState({
            aid:aid
        })
    }
}

export default Projectcontent;