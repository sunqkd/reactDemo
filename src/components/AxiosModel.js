import React, {Component} from 'react';

import axios from 'axios';

class AxiosModel extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    getData = ()=>{ // 获取数据
        console.log('获取数据');
        axios.get('').then((res)=>{
            console.log(res);
        })
    }
    render() {
        return (
            <div>
                <h2>axios</h2>
                <button onClick={this.getData}>按钮</button>
            </div>
        );
    }
}

export default AxiosModel;