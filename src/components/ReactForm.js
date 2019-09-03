import React, { Component } from 'react';

class ReactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg:'react表单',

            city:[
                '北京','上海','广州'
            ],
            selectCity:'', // 选择的城市

            hobby:[
                {
                    'title':'睡觉',
                    'checked':true
                },
                {
                    'title':'写代码',
                    'checked':true
                },
                {
                    'title':'上课',
                    'checked':true
                }
            ],
            sex:'1',
            textarea:'',

        };
    }
    // onchange 事件
    handelName= (e)=>{
        // console.log(e.target.value)
        this.setState({
            msg:e.target.value
        })

    }

    // 提交事件
    handleSubmit = (e)=>{
        // 阻止提交事件
        e.preventDefault();

        console.log(this.state.msg);
        console.log(this.state.sex);
        console.log(this.state.selectCity);
        console.log(this.state.hobby);
        console.log(this.state.textarea);

    }

    // 单选框
    handelSelect = (e)=>{
        this.setState({
            sex:e.target.value
        })
    }

    // 下拉框
    handleCity = (e)=>{
        this.setState({
            selectCity:e.target.value
        })
    }

    // 多选框
    checkBoxChange = (index)=>{
        var hobby = this.state.hobby;
        hobby[index].checked = !hobby[index].checked; // 取反操作

        this.setState({
            hobby:hobby
        })

    }
    // 文本框
    handleCtext = (e) => {
        this.setState({
            textarea:e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.msg} onChange={this.handelName}/>
                    <hr/>
                    <input type="radio" value="1" checked={this.state.sex === '1'} onChange={this.handelSelect} />男
                    <input type="radio" value="2" checked={this.state.sex === '2'} onChange={this.handelSelect} />女
                    <hr/>
                    居住城市
                    <select value={this.state.selectCity} onChange={this.handleCity}>
                        {
                            this.state.city.map((value,index)=>{
                                return <option key={index}>{value}</option>
                            })
                        }
                    </select>
                    <hr/>
                    爱好
                    {
                        this.state.hobby.map((value,index)=>{
                            return (
                                <span key={index}>
                                    <input  type="checkbox"  checked={value.checked} onChange={this.checkBoxChange.bind(this,index)}/> {value.title}
                                </span>
                            )
                        })
                    }
                    <hr/>
                    <textarea value={this.textarea} onChange={this.handleCtext}></textarea>
                    <hr/>
                    <input type="submit"  defaultValue="提交"/>
                </form>
            </div>
        )
    }

}

export default ReactForm;