import React, { Component } from 'react';

import appStorage from '../model/storage';

class ToDoList2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            list:[ // 模拟数据  true 代表已完成事项， false代表代办事项
                // {
                //     title:'录制icon',
                //     checked:false
                // },
                // {
                //     title:'录制icon',
                //     checked:false
                // },
                // {
                //     title:'录制icon',
                //     checked:false
                // },
                // {
                //     title:'录制icon',
                //     checked:true
                // }
            ]

        };
    }
    addData = (e) => { // 增加数据
        if(e.keyCode === 13){
            let titleValue =  this.refs.title.value;
            let tempList = this.state.list; 

            tempList.push({
                title:titleValue,
                checked:false
            });

            this.refs.title.value = ''; // 清空输入框
            this.setState({
                list:tempList
            })

            // 执行缓存数据
            // sessionStorage.setItem('todolist', JSON.stringify(tempList) ); // 转换成字符串

            appStorage.set('todolist',tempList)

        }
    }

    checkBoxChange = (key,value,e) =>{ // checkbox 点击切换
        let tempList = this.state.list;
        tempList[key].checked = !tempList[key].checked;
        this.setState({
            list:tempList
        })
        // sessionStorage.setItem('todolist', JSON.stringify(tempList) ); // 转换成字符串

        appStorage.set('todolist',tempList)
    }

    removeData = (key) => {
        var tempList = this.state.list; // 中间变量
        tempList.splice(key,1); // 删除数组中的数据
        this.setState({
            list:tempList
        });

        // sessionStorage.setItem('todolist', JSON.stringify(tempList) ); // 转换成字符串

        appStorage.set('todolist',tempList)
    }


    // 生命周期函数 (页面渲染完成)

    componentDidMount() {
        // 获取缓存的数据
        var list =JSON.parse(sessionStorage.getItem('todolist')); // 字符串

        if(list){
            this.setState({
                list:list
            })
        }else{

        }
    }

    render() {
        return (
            <div>
                <input  type="text" ref="title" onKeyUp={ this.addData } />
                <h1>代办事项</h1>

                <ul>
                    {
                        this.state.list.map((value,index) => {
                            if(value.checked === false){
                                return (
                                    <li key={index}>
                                        <input type="checkbox" checked={value.checked}  onChange={ this.checkBoxChange.bind(this,index,value) } />
                                        {value.title}
                                        <button onClick={ this.removeData.bind(this,index) }> 删除 </button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>

                <hr/>

                <h1>已完成事项</h1>

                <ul>
                    {
                        this.state.list.map((value,index) => {
                            if(value.checked){
                                return (
                                    <li key={index}>
                                        <input type="checkbox" checked={value.checked} onChange={ this.checkBoxChange.bind(this,index,value) } />
                                        {value.title}
                                        <button onClick={ this.removeData.bind(this,index) }> 删除 </button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>

            </div>
        );
    }
}

export default ToDoList2;