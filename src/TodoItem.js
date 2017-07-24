import React,{ Compontent } from 'react';

export default class TodoItem extends Compontent {
	render(){
		return <div>{this.props.todo.title}</div>
	}
}