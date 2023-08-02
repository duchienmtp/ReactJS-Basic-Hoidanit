const Todo = (props) => {
  const todos = props.todos;
  const title = props.title;
  return (
    <ul className="todos-container">
      <h3> {title}</h3>
      {todos &&
        todos.length > 0 &&
        todos.map((item, index) => {
          return (
            <>
              <li className="todos-child" key={index}>
                {item.id} - {item.title}
              </li>
              <span>X</span>
            </>
          );
        })}
    </ul>
  );
};

export default Todo;
