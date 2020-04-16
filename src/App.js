import React, { Component } from "react";
import Header from"./Header"
import TodoItem from "./TodoItem"
import todoData from "./TodoData"

import "./styles.css";

class App extends Component{
constructor(){
  super()
this.state = { 
todos: todoData
}
this.handleChange= this.handleChange.bind(this);
}
handleChange(id){
this.setState(prevState => {
const updatedTodos = prevState.todos.map(todo =>{
if (todo.id === id){todo.completed = !todo.completed}return todo}) 
return{ todos: updatedTodos}
})
}
  render(){
    const itemComponent = this.state.todos.map(item => <TodoItem 
      item={item}   key={item.id} handleChange={this.handleChange} />)
    return(
    <React.Fragment>
      <Header />
    <div className= "todo-list">
    {itemComponent}
    
    </div> </React.Fragment>
    
    )
  }

}

export default App;