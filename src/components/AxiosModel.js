import React, {Component} from 'react';

import axios from 'axios';

class AxiosModel extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            domain:'https://app.dyly.com',
            list:[],

        };
    }
    getData = ()=>{ // 获取数据
        axios.get(this.state.domain+'/vc/qhRoadShow/getSignUpList',{
            params:{
                roadShowId:2
            }
        }).then((res)=>{
            if(res.data.status == 1){
                console.log(res.data.data);
                this.setState({
                    list:res.data.data
                })
            }
        })
    }
    render() {
        return (
            <div>
                <h2>axios</h2>
                <button onClick={this.getData}>按钮</button>

                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return (
                                <li key={key}>
                                    {value.companyName}
                                </li>
                            )
                        })
                    }
                    
                </ul>

            </div>
        )
    }
}

export default AxiosModel;