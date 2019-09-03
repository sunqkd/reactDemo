import React, {Component} from 'react';

class FunMethods extends React.Component{

    constructor(){
        super();

        this.state = {
            name: '第一路演',
            message: '第一路演 - 基本信息',
        }

        this.getMessage = this.getMessage.bind(this);

    }

    // 定义的一个 run 方法

    run(){
        alert('我是一个run方法')
    }

    // 获取 数据
    getData(){
        console.log(this.state);
    }
    
    // 第二中情况
    getMessage(){
        console.log(this);
    }

    // 第三种情况
    getName = ()=> {

        console.log(this);

    }
    // 改变state的值

    setData = () => {
        this.setState({
            name:'更改第一路演'
        })
    }

    sedMessage = (msg) => {

        this.setState({
            name:msg
        })
        
    }

    render(){
        return(
            <div>
                {this.state.name}

                <button onClick={this.run}>测试方法</button>

                {/* 第一种改变this指向的方法 */}
                <button onClick={this.getData.bind(this)}>获取数据</button>
                {/* 第二种改变this指向的方法 */}
                <button onClick={this.getMessage}>获取数据（2）</button>
                {/* 第三种改变this指向的方法 */}
                <button onClick={this.getName}>获取数据（3）</button>

                {/* 改变state中的值 */}

                <button onClick={this.setData}>改变值</button>

                <button onClick={this.sedMessage.bind(this,'张三')}>执行方法传值</button>

            </div>
        )
    }
}
export default FunMethods;