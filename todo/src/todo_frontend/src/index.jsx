import * as React from "react";
import ReactDOM from 'react-dom/client';
import { todo_backend } from "../../declarations/todo_backend";

export default  function App() {
  const [listItem, setListItem] =  React.useState([]);
  async function ListItem() {
    const ListItem = await todo_backend.getArrayData();
    setListItem(ListItem);
  }
  
  React.useEffect(() =>{
    ListItem()
    
  }, []);

  var items = listItem.map((item) => {
    var todoClass = item.done ? "done" : "undone";
    const onClickClose = () => {
      var index = parseInt(index);
      // item.removeItem(index);
    }
    const onClickDone = async (index, done) =>{
      console.log("listItem", index, done);
      const ListItem = await todo_backend.updateObject(index, !done);
      setListItem(ListItem);
      console.log(listItem);
    }
    
    return (
      <li className="list-group-item" key={item.index}>
        <div className={todoClass}>
          <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={() => onClickDone(item.index, item.done)}></span>
            {item.value}
          <button type="button" className="close glyphicon glyphicon-remove-circle icon pull-right" onClick={() => onClickClose()}></button>
        </div>
      </li>
    );
  });
  return (
    <div id="main">
      <h1>Todo list</h1>
      <ul className="list-group"> {items} </ul>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);