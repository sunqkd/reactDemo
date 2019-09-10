import React, {Component} from 'react';

class Rouer3Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            aid:''
        };
    }
    render() {
        return (
            <div>
                详情页
                {this.state.aid}
            </div>
        );
    }

    componentDidMount(){ // 组件加载完成

        this.setState({

            aid:this.props.match.params.aid
            
        })

        // console.log(this.props.match.params.aid);
    }
}

export default Rouer3Detail;