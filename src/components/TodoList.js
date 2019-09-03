import React, { Component } from 'react';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName:'456'
        };
    }
    // 监听的方法
    inputChange=(e)=>{
        this.setState({
            userName:e.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>双向数据绑定</h2>
                
                {this.state.userName}

                <input  value={this.state.userName} onChange={this.inputChange}/>
                <hr />

                <input  defaultValue={this.state.userName}  />

            </div>   
        )
    }
}

export default TodoList;