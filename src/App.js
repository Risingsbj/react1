import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: "text",
      todeList: [
        {id:1,title:"第一个代办"}
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return <li>{items.title}</li>
    })

    return (
      <div className="App">
        <h1>我的代办</h1>
        <div className="inputWrapper">
          <input type="text" value={this.state.newTodo}/>
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }
}

export default App;
