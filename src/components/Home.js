import React, { Component } from 'react';
import '../assets/css/index.css';

import Header from './Header';
import Lifecycle from './Lifecycle';
// 绑定属性注意：
// class 要换成 className
// label for 要换成 htmlFor
// style 行内样式（对象的形式）： <div style={{color:"red"}}>div添加行内样式</div>
// <div style={this.state.style}>绑定style属性样式</div>
// 其他属性 和以前写法相同

class Home extends  React.Component {
    // 构造函数
    constructor(props) {
        super(props); // 继承 Component props主要用于父子组件之间的传值 
        // 定义数据
        this.state = {
            name: "张三",
            title: '首页传过来的title',
            color:'red',
            style:{
                color:"blue",
                fontSize:"20px"
            },
            flag:true, // 挂载组件
        }
    }

    run = () => {
        console.log('我是父组件的run方法');
    }

    getChild = () => { // 
        console.log(this.refs.header.state)
    }

    setFlag = () => { // 挂载组件
        this.setState({
            title:'465564',
            flag:!this.state.flag
        })
    }

    // render 模板 jsx 语法
    render() {
        return (
            <div>
                <h2>Home组件</h2>
                <p>根节点--{this.state.name}</p>
                <div title="111">我是div</div>
                <br/>
                <div title={this.state.name}>我是div</div>
                <br/>
                <div title={this.state.name} className="red">我是红色的div</div>
                <br/>
                <div className={this.state.color}>属性绑定颜色</div>
                <br/>
                <label htmlFor="name">姓名</label>
                <input id="name"/>
                <br/>
                <div style={{color:"red"}}>div添加行内样式</div>
                <br/>
                <div style={this.state.style}>绑定style属性样式</div>

                <hr/>

                <button onClick={this.getChild}>ref</button>

                <Header title={this.state.title} run={this.run} news12={this} ref="header"></Header>

                <Header  run={this.run} news12={this} ref="header"></Header>

                <hr/>

                <button onClick={this.setFlag}>挂载组件</button>
                {
                    this.state.flag?<Lifecycle title={this.state.title}/>:' '
                }
                

            </div>
        )
    }
}


export default Home;