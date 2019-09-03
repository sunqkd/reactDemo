import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {

        super(props); // 固定写法 用于父子组件传值

        this.state = { 
            msg:'这是一个头部组件'
        }
    }

    getParents = () =>{
        console.log(this.props.news12.state.title)
    }

    render() {
        return (
            <div>
                <h2> {this.props.title} </h2>
                <button onClick={this.props.run} >
                    按钮
                </button>
                <button onClick={this.props.news12.run}>传递整个组件</button>

                <button onClick={this.getParents}> 获取父组件 </button>
            </div>
        )
    }

}

export default Header;