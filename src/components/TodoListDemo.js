import React, { Component } from 'react';
class TodoListDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            list:[], // 添加的表单
        };
    }

    // 增加数据
    addData = ()=>{
        var tempList = this.state.list; // 中间变量
        tempList.push(this.refs.title.value);
        this.refs.title.value = ''; // 清空输入框
        this.setState({
            list:tempList
        })
    }

    // 删除数据
    delectItem = (index) => {
        var tempList = this.state.list; // 中间变量
        tempList.splice(index,1); // 删除数组中的数据
        this.setState({
            list:tempList
        });
    }

    render() {
        return (
            <div>
                <h2>TodoList 案例演示</h2>
                <input type="text" ref="title"/>
                <button onClick={this.addData}> 增加+ </button>
                <ul>
                    {
                        this.state.list.map((value,index)=>{
                            return <li key={index}> {value} <button onClick={this.delectItem.bind(this,index)}>删除 - </button> </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoListDemo;