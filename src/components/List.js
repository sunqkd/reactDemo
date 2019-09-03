import React, { Component } from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:''
        };
    }

    onchangeInput= ()=>{
        let val =  this.refs.username.value;
        this.setState({
            username: val
        })
    }

    getInput=()=>{
        console.log(this.state.username);
    }

    // 键盘事件
    onKeyinput=(e)=>{
        console.log(e.keyCode)
        if(e.keyCode == 13){
            alert(e.target.value)
        }
    }
    

    render() {
        return (
            <div>
                <input ref="username" onChange={this.onchangeInput}/>
                <button onClick={this.getInput}>获取数据</button>
                <br/>
                键盘事件
                
                <input  onKeyUp={this.onKeyinput} />
            </div>
        )
    }
}

export default List;