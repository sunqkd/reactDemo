import React, { Component } from 'react';

class RefModel extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            userName:''
        }

    }

    run = (event) => {
        console.log(event.target);

        event.target.style.background = 'red';

        console.log( event.target.getAttribute('aid') );
    }
    // input 更改事件
    inputChange = (e)=>{
        console.log(e.target.value);

        this.setState({
            userName:e.target.value
        })

    }

    // 获取值
    getInput = ()=>{
        console.log(this.state.userName)
    }

    render(){
        return (
            <div>
                事件对象
                <button aid="123" onClick={this.run}>事件对象</button>
                <br/>

                
                <input onChange={this.inputChange}/>

                {/* 
                    1、监听表单的改变事件
                    2、获取表单输入的值
                */}
                
                <button onClick={this.getInput}>获取input框的值</button>
                
            </div>
        )
    }
}

export default RefModel;