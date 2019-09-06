import React, {Component} from 'react';
class Lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log('01 构造方法')
        this.state = { 
            msg:'456'
        };
    }

    updateMsg = () => { // 更新数据方法
        this.setState({
            msg:'454556'
        })
    }

    componentWillMount(){  // 组件将要挂载 数据还没开始渲染 不必请求数据
        console.log('02 组件将要挂载');
    }
    
    shouldComponentUpdate(nextProps, nextState){ // 是否更新数据

        console.log(nextProps); // 父组件传过来的数据
        console.log(nextState); // 更新的数据

        console.log('update01');
        return true;
    }
    componentWillUpdate(){
        console.log('update02 将要被更新');
    }


    render() {
        console.log('03 数据渲染');
        return (
            <div>
                { this.props.title }
                生命周期 -- {this.state.msg}
                <button onClick={this.updateMsg}> 更新数据 </button>
            </div>
        )
    }

    componentDidUpdate(){ // 更新完成
        console.log('update04 更新完成');

    }


    componentDidMount(){
        console.log('04 组件渲染完毕');
    }


    componentWillUnmount(){ // 组件销毁的时候 触发的生命周期函数
        console.log('05 组件销毁');
    }

    componentWillReceiveProps(){ // 改变父组件传值的时候 触发
        console.log(456)
    }

}

export default Lifecycle;