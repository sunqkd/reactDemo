import React, {Component} from 'react';

import fetchJsonp from 'fetch-jsonp';

class FetchJsonp extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            list:[],
        };
    }

    getData = ()=>{
        var api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
        // console.log(api);
        var that = this;
        fetchJsonp(api)
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            console.log(json.result);
            that.setState({
                list:json.result
            })
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }

    render() {
        return (
            <div>
                <h2>FetchJsonp</h2>

                <button onClick={this.getData}>Jsonp</button>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return (
                                <li key={key}>
                                    {value.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default FetchJsonp;