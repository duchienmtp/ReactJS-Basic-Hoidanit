import React, { useState } from "react";
import _ from "lodash";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";

// Hook Component
const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([
    { id: "todo1", name: "Watching youtube" },
    { id: "todo2", name: "Using facebook" },
    { id: "todo3", name: "Reading book" },
  ]);

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleClickBtn = () => {
    let todoId = randomIntFromInterval(4, 99999999999999);
    let todoItem = {
      id: `todo${todoId}`,
      name: todo, //string template
    };

    let currentTodoList = _.clone(listTodo);
    currentTodoList.push(todoItem);
    setListTodo(currentTodoList);

    // setListTodo([...listTodo, todoItem]);  //spread operator
  };

  const handleDeleteTodo = (id) => {
    let currentTodoList = _.clone(listTodo);
    currentTodoList = currentTodoList.filter((item) => item.id !== id);
    // currentTodoList = currentTodoList.filter(item => {
    //     if (item.id !== id) return item;
    // });

    setListTodo(currentTodoList);
  };

  const myInfo = { channel: "hoi dan it", age: 25 }
  return (
    <div>
      <AddTodo todo={todo} setTodo={setTodo} handleClickBtn={handleClickBtn} />

      <DisplayTodo
        childData={listTodo} // x=y =>   x <- y
        name={"Eric"}
        myInfo={myInfo}
        deleteTodoInParent={handleDeleteTodo}
      />
    </div>
  );
};
// Class Component
// class TodoList extends React.Component {

//     state = {
//         name: 'Eric',
//     }

//     render() {
//         return (
//             <div>

//                 <label>Name</label>
//                 <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />
//                 <br /><br />
//                 Hello Todo list with name = {this.state.name}
//             </div>
//         )

//     }
// }

export default TodoList;
