import React, { Component } from 'react';
import './TodoInput.css'
 
export default class TodoInput extends Component {
    render(){
    return <input type="text" className="TodoInput" defaultValue={this.props.content}
      onKeyPress={this.submit.bind(this)}/>
  }
    submit(e){
    	if (e.key === 'Enter') {
      		this.props.onSubmit(e)
    	}
    }
    changeTitle(e){
     	this.props.onChange(e)
   }
}