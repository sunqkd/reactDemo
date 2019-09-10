import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // 路由

/*
	文档：https://reacttraining.com/react-router/web/example/basic
	
*/

// import Home from './components/Home';
// import News from './components/News';
// import FunMethods from './components/FunMethods';
// import RefModel from './components/RefModel';
// import List from './components/List';
// import TodoList from './components/TodoList';
// import ReactForm from './components/ReactForm';
// import TodoListDemo from './components/TodoListDemo';
// import TodoList2 from './components/ToDoList2';
// import Header from './components/Header';
// import AxiosModel from './components/AxiosModel';
// import FetchJsonp from './components/FetchJsonp';
// import Lifecycle from './components/Lifecycle';

import Router1 from './components/Router1';
import Router2 from './components/Router2';
import Router3 from './components/Router3';

import Rouer3Detail from './components/Rouer3Detail';
import Projectcontent from './components/Projectcontent';


function App() {
	return (
		// <div className="App">
		// 	{/* <Home></Home> */}
		// 	{/* <News></News> */}
		// 	{/* <FunMethods></FunMethods> */}
		// 	{/* <RefModel></RefModel> */}
		// 	{/* <List></List> */}
		// 	{/* <TodoList></TodoList> */}
		// 	{/* <ReactForm></ReactForm> */}
		// 	{/* <TodoListDemo></TodoListDemo> */}
		// 	{/* <TodoList2></TodoList2> */}
		// 	{/* <Header></Header> */}
		// 	{/* <AxiosModel></AxiosModel> */}
		// 	{/* <FetchJsonp></FetchJsonp> */}
		// 	{/* <Lifecycle></Lifecycle> */}
		// </div>
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/topics">Topics</Link>
					</li>
				</ul>
				<hr />
				{/* 路由加载不同的组件 */}
				<Route exact path="/" component={Router1} />
				<Route path="/about" component={Router2} />
				<Route path="/topics" component={Router3} />
				<Route path='/content/:aid' component={Rouer3Detail}/>

				<Route path='/projectcontent' component={Projectcontent}/> 
				
			</div>
	  	</Router>
	);
}

export default App;
