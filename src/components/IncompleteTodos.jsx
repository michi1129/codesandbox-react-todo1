import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onComplete, onDelete } = props;
  return (
    <div className="incomplete-area">
      <div>
        <p className="title">未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <span>{todo}</span>
                  <button onClick={() => onComplete(index)}>完了</button>
                  <button onClick={() => onDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
