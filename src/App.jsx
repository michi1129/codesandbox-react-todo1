import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const todoTextOnChange = (event) => setTodoText(event.target.value);
  const addOnClick = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const deleteOnClick = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const completeOnClick = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const backOnClick = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={todoTextOnChange}
        />
        <button onClick={addOnClick}>追加</button>
      </div>
      <div className="incomplete-area">
        <div>
          <p className="title">未完了のTODO</p>
          <ul>
            {incompleteTodos.map((todo, index) => {
              return (
                <li key={todo}>
                  <div className="list-row">
                    <span>{todo}</span>
                    <button onClick={() => completeOnClick(index)}>完了</button>
                    <button onClick={() => deleteOnClick(index)}>削除</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="complete-area">
        <div>
          <p className="title">完了したTODO</p>
          <ul>
            {completeTodos.map((todo, index) => {
              return (
                <li key={todo}>
                  <div className="list-row">
                    <span>{todo}</span>
                    <button onClick={() => backOnClick(index)}>戻す</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
