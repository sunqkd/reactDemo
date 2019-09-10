import React, {Component} from 'react';
import { Link } from "react-router-dom"; // 路由
class Router3 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    aid:'1',
                    title:'6661'
                },
                {
                    aid:'2',
                    title:'6662'
                },
                {
                    aid:'3',
                    title:'6663'
                },
                {
                    aid:'4',
                    title:'6664'
                },
                {
                    aid:'5',
                    title:'6665'
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
                                   <Link to={`/content/${value.aid}`}> {value.title} </Link>
                                </li> 
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Router3;