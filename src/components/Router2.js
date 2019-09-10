import React, {Component} from 'react';
import { Link } from "react-router-dom"; // 路由
class Router2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    aid:'1',
                    title:'1'
                },
                {
                    aid:'2',
                    title:'2'
                },
                {
                    aid:'3',
                    title:'3'
                },
                {
                    aid:'4',
                    title:'4'
                },
                {
                    aid:'5',
                    title:'5'
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((value,index)=>{
                            return ( 
                                <li key={index}>
                                   <Link to={`/projectcontent`}> {value.title} </Link>
                                </li> 
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Router2;