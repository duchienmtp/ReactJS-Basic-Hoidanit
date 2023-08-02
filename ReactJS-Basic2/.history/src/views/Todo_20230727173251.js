const Todo = (props) => {
    const todos = props.todos;
    const title = todos.title;
  return (
    <ul className="todos-container">
      {todos &&
        todos.length > 0 &&
        todos.map((item, index) => {
          return (
            <li className="todos-child" key={index}>
              {item.id} - {item.title}
            </li>
          );
        })}
    </ul>
  );
};

export default Todo;
