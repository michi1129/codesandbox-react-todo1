import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["うううううう"]);

  const todoTextOnChange = (event) => setTodoText(event.target.value);
  const addOnClick = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
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
            {incompleteTodos.map((todo) => {
              return (
                <li key={todo}>
                  <div className="list-row">
                    <span>{todo}</span>
                    <button>完了</button>
                    <button>削除</button>
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
            {completeTodos.map((todo) => {
              return (
                <li key={todo}>
                  <div className="list-row">
                    <span>{todo}</span>
                    <button>戻す</button>
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
