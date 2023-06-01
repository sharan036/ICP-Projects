import * as React from "react";
import ReactDOM from 'react-dom';
import { todo_list_backend } from "../../declarations/todo_list_backend";
import '../assets/main.css';

var todoItems = [];
  todoItems.push({index: 1, value: "learn react", done: false});
  todoItems.push({index: 2, value: "Go shopping", done: true});
  todoItems.push({index: 3, value: "buy flowers", done: true});

// const MyHello = () => {
//   const [name, setName] = React.useState('');
//   const [message, setMessage] = React.useState('');

//   async function doGreet() {
//     const greeting = await todo_list_backend.greet(name);
//     setMessage(greeting);
//   }

//   return (
//     <div style={{ "fontSize": "30px" }}>
//       <div style={{ "backgroundColor": "yellow" }}>
//         <p>Greetings, from DFINITY!</p>
//         <p>
//           {" "}
//           Type your message in the Name input field, then click{" "}
//           <b> Get Greeting</b> to display the result.
//         </p>
//       </div>
//       <div style={{ margin: "30px" }}>
//         <input
//           id="name"
//           value={name}
//           onChange={(ev) => setName(ev.target.value)}
//         ></input>
//         <button onClick={doGreet}>Get Greeting!</button>
//       </div>
//       <div>
//         Greeting is: "
//         <span style={{ color: "blue" }}>{message}</span>"
//       </div>
//     </div>
//   );
// };

// render(<MyHello />, document.getElementById("app"));
class TodoList extends React.Component {

  // async componentDidUpdate(){
  //   const arrayData = await todo_list_backend.getArrayData(); 
  //   todoItems = arrayData;
  // }
  
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}
  
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render () {
    var todoClass = this.props.item.done ? 
        "done" : "undone";
    return(
      <li className="list-group-item ">
        <div className={todoClass}>
          <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
          {this.props.item.value}
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>     
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    
    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  }
  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
        <button type="submit" className="btn btn-default">Add</button> 
      </form>
    );   
  }
}
  
class TodoHeader extends React.Component {
  render () {
    return <h1>Todo list</h1>;
  }
}
  
class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: (todoItems.length != 0) ? todoItems : ''};
  }

  addItem(todoItem) {
    todoItems.unshift({
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({todoItems: todoItems});
  }
  removeItem (itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }
  markTodoDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});  
  }
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

ReactDOM.render(<TodoApp initItems={todoItems}/>, document.getElementById('app'));