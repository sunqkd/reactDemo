import React, { Component } from 'react';
import PropsTypes from 'prop-types';
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

// 不传值时的默认值 
Header.defaultProps = {
    title:'不传值时候的默认值',
    
}

// 定义父组件给子组件传值的类型

Header.propTypes = {
    title:PropsTypes.string
}

export default Header;