import React, { Component } from 'react';
import logo from '../assets/images/de.png';

// 循环的实质：把List 转换成 list2 的形式 
// 

class News extends Component {
    
    constructor() {
        super();
        this.state={
            list:[
                {name:'111',logo:'https://www.baidu.com/img/bd_logo1.png?where=super'},
                {name:'222',logo:'https://www.baidu.com/img/bd_logo1.png?where=super'},
            ],
            list2:[<h2 key="1">adsa</h2>,<h2 key="2">wq</h2>,<h1 key="3">ww</h1>],
        }
    }

    render() {
        // 绑定内容和属性
        var listResult = this.state.list.map((currentValue,index,array)=>{
            return  <li key={index}>
                        {currentValue.name}
                        <img src={currentValue.logo} style={{"width":"100px"}}/> 
                    </li>
        })

        return (
            <div className="news">
                {/* 引入本地图片 */}
                <img src={logo} />
                <br />
                <img src={require('../assets/images/de.png')} />
                <br />
                {/* 引入远程图片 */}
                <img style={{width:"100px",cursor:"pointer"}} src="https://www.baidu.com/img/bd_logo1.png?where=super" />
                <hr />
                {this.state.list2}
                <hr/>
                <ul>
                    {listResult}
                </ul>
                <ul>
                    {
                        this.state.list.map((currentValue,index,array)=>{
                            return(
                                <li key={index}>{currentValue.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default News;